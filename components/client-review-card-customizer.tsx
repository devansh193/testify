"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Minus, Move, Save } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type QuestionType = "rating" | "text";

interface Question {
  id: number;
  text: string;
  type: QuestionType;
}

interface TestimonialCardConfig {
  id?: number; // Make id optional for editing existing cards
  title: string;
  description: string;
  questions: Question[];
  showLogo: boolean;
  logoUrl: string;
}

interface TestimonialCardCustomizerProps {
  onSave: (config: TestimonialCardConfig) => void;
  existingData?: TestimonialCardConfig; 
}

export function TestimonialCardCustomizer({
  onSave,
  existingData,
}: TestimonialCardCustomizerProps) {
  const [title, setTitle] = useState("Your Product Name");
  const [description, setDescription] = useState(
    "Describe your product or service here"
  );
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, text: "How would you rate our product?", type: "rating" },
  ]);
  const [showLogo, setShowLogo] = useState(true);
  const [logoUrl, setLogoUrl] = useState("/placeholder.svg?height=80&width=80");

  // Load existing data when editing
  useEffect(() => {
    if (existingData) {
      setTitle(existingData.title);
      setDescription(existingData.description);
      setQuestions(existingData.questions);
      setShowLogo(existingData.showLogo);
      setLogoUrl(existingData.logoUrl);
    }
  }, [existingData]);

  const addQuestion = () => {
    const newId =
      questions.length > 0 ? Math.max(...questions.map((q) => q.id)) + 1 : 1;
    setQuestions([...questions, { id: newId, text: "", type: "text" }]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const updateQuestion = (id: number, text: string, type: QuestionType) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, text, type } : q))
    );
  };

  const moveQuestion = (id: number, direction: "up" | "down") => {
    const index = questions.findIndex((q) => q.id === id);
    if (
      (direction === "up" && index > 0) ||
      (direction === "down" && index < questions.length - 1)
    ) {
      const newQuestions = [...questions];
      const temp = newQuestions[index];
      newQuestions[index] = newQuestions[index + (direction === "up" ? -1 : 1)];
      newQuestions[index + (direction === "up" ? -1 : 1)] = temp;
      setQuestions(newQuestions);
    }
  };

  const handleSave = () => {
    const testimonialCardConfig: TestimonialCardConfig = {
      title,
      description,
      questions,
      showLogo,
      logoUrl,
      id: existingData?.id, // Retain the original id if editing
    };
    onSave(testimonialCardConfig);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          {existingData ? "Edit Testimonial Card" : "Customize Your Testimonial Card"}
        </CardTitle>
        <CardDescription>
          Modify the details and questions for your audience
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your product or service name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your product or service"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="logo-toggle">Show Logo</Label>
          <div className="flex items-center space-x-2">
            <Switch
              id="logo-toggle"
              checked={showLogo}
              onCheckedChange={setShowLogo}
            />
            <Label htmlFor="logo-toggle">
              {showLogo ? "Logo Visible" : "Logo Hidden"}
            </Label>
          </div>
        </div>
        {showLogo && (
          <div className="space-y-2">
            <Label htmlFor="logo-url">Logo URL</Label>
            <Input
              id="logo-url"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              placeholder="Enter the URL of your logo"
            />
          </div>
        )}
        <div className="space-y-2">
          <Label>Questions</Label>
          {questions.map((question, index) => (
            <Card key={question.id} className="p-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Input
                    value={question.text}
                    onChange={(e) =>
                      updateQuestion(question.id, e.target.value, question.type)
                    }
                    placeholder="Enter your question"
                  />
                  <Select
                    value={question.type}
                    onValueChange={(value: QuestionType) =>
                      updateQuestion(question.id, question.text, value)
                    }
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Rating</SelectItem>
                      <SelectItem value="text">Text</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => moveQuestion(question.id, "up")}
                    disabled={index === 0}
                  >
                    <Move className="h-4 w-4 rotate-180" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => moveQuestion(question.id, "down")}
                    disabled={index === questions.length - 1}
                  >
                    <Move className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeQuestion(question.id)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
          <Button onClick={addQuestion} className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Add Question
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} className="w-full">
          <Save className="mr-2 h-4 w-4" /> {existingData ? "Update" : "Save"} Testimonial Card
        </Button>
      </CardFooter>
    </Card>
  );
}
