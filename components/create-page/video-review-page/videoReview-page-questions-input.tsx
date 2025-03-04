"use client";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { videoReviewQuestionsAtom } from "@/recoil/atom";
import { videoReviewQuestionsErrorSelector } from "@/recoil/selectors";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";

const VideoQuestionsInput = () => {
  const [questions, setQuestions] = useRecoilState(videoReviewQuestionsAtom);
  const error = useRecoilValue(videoReviewQuestionsErrorSelector);

  const updateQuestion = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const deleteQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  return (
    <div className="">
      <Label>Keep in mind</Label>
      {error && <span className="text-red-500 text-sm mt-2">{error}</span>}{" "}
      {/* Display error message */}
      <div className="space-y-2 mt-1">
        {questions.map((question, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input
              placeholder={`Points to remember ${index + 1}`}
              value={question}
              onChange={(e) => updateQuestion(index, e.target.value)}
              className={error ? "border-red-500" : ""} // Highlight input if error exists
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteQuestion(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="sm"
        className="mt-2"
        onClick={addQuestion}
      >
        <Plus className="mr-2" /> Add
      </Button>
    </div>
  );
};

export default VideoQuestionsInput;
