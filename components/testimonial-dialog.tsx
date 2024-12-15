"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "./ui/input";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Logo from "./logo/Logo";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Plus, Trash2 } from "lucide-react";

export function TestimonialDialog() {
  const [title, setTitle] = useState("Title comes here.");
  const [description, setDescription] = useState(
    "Your custom message comes here."
  );
  const [questions, setQuestions] = useState(["Question comes here."]);

  const handleQuestionChange = (value: string, index: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const deleteQuestion = (index: number) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-600 hover:border-blue-700 font-semibold text-md">
          <Plus className="mr-2" /> Create Space
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[1024px] bg-neutral-900 border-none">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">
            Create testie
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 w-full gap-x-2 p-4">
          <div className="col-span-1 p-2">
            <Card className="p-2">
              <div className="mb-4">
                <CardHeader className="flex flex-col items-center justify-center gap-y-2">
                  <CardTitle>
                    <Logo />
                  </CardTitle>
                  <CardTitle className="text-3xl">{title}</CardTitle>
                </CardHeader>
                <CardDescription className="text-center">
                  {description}
                </CardDescription>
              </div>
              <Separator className="mt-2" />
              <CardHeader className="text-xl font-semibold">
                Questions
              </CardHeader>
              <div className="flex items-center justify-start gap-y-1 px-6">
                <h1 className="text-lg">
                  {questions.map((question, index) => (
                    <p key={index}>{question}</p>
                  ))}
                </h1>
              </div>
              <div className="flex items-center justify-center gap-x-4 mt-4 pt-4">
                <Button className="bg-blue-600 hover:bg-blue-600 hover:border-blue-700 font-semibold">
                  Text review
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-600 hover:border-blue-700 font-semibold">
                  Video review
                </Button>
              </div>
            </Card>
          </div>
          {/* --------------------------------------------------------------------------------------------- */}
          <div className="col-span-1 p-2">
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-md font-semibold text-white">
                Create a new testie
              </h1>
            </div>
            <div className="space-y-2">
              <div className="space-y-2">
                <Label className="text-xl font-semibold text-white">
                  Title <span className="text-rose-600">*</span>
                </Label>
                <Input
                  className="border-2 text-neutral-200"
                  placeholder="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <p className="text-sm text-neutral-200">
                  Public url is: testie.io/{title}
                </p>
              </div>
              <div className="space-y-2 text-white">
                <Label className="text-xl font-semibold text-white">
                  Description <span className="text-rose-600">*</span>
                </Label>
                <Textarea
                  className="border-2 text-neutral-200"
                  placeholder="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-2 text-white">
                <Label className="text-xl font-semibold">
                  Questions <span className="text-rose-600">*</span>
                </Label>
                {questions.map((question, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      className="border-2 flex-1"
                      placeholder={`Question ${index + 1}`}
                      value={question}
                      onChange={(e) =>
                        handleQuestionChange(e.target.value, index)
                      }
                    />
                    <Button
                      onClick={() => deleteQuestion(index)}
                      className="text-rose-600 hover:text-rose-700 "
                    >
                      <Trash2 />
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={addQuestion}
                  className="mt-2 bg-blue-600 hover:bg-blue-600 border-blue-700 font-semibold"
                >
                  Add Question
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg-blue-600 hover:bg-blue-600 border-blue-700 font-semibold"
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
