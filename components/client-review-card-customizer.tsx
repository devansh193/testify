"use client";
import { getSession } from "next-auth/react";
import { useRecoilState } from "recoil";
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
import { Plus, Minus, Move, Save, Loader, icons } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ClientReviewCardComponent } from "./client-review-card";
import {
  titleAtom,
  descriptionAtom,
  questionsAtom,
  showLogoAtom,
  logoUrlAtom,
} from "@/recoil/atom";
import { createProduct } from "@/action/product";
import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { CreateProductSchema } from "@/schema/schema";

type QuestionType = "rating" | "text";

// interface Question {
//   id: number;
//   text: string;
//   type: QuestionType;
// }

// export interface ProductDetails {
//   title: string;
//   description: string;
//   showLogo: boolean;
//   logoUrl: string | null;
//   questions: Question[];
//   userId: string;
// }

interface TestimonialCardCustomizerProps {
  onSave: (config: typeof CreateProductSchema) => void;
  existingData?: typeof CreateProductSchema;
}

export function TestimonialCardCustomizer({
  existingData,
}: TestimonialCardCustomizerProps) {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [description, setDescription] = useRecoilState(descriptionAtom);
  const [questions, setQuestions] = useRecoilState(questionsAtom);
  const [showLogo, setShowLogo] = useRecoilState(showLogoAtom);
  const [logoUrl, setLogoUrl] = useRecoilState(logoUrlAtom);

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

  const handleSave = async () => {
    const toastId = toast("Preparing to create product...", {
      duration: 5000,
      icon: <Loader className="animate-spin" />,
    });

    try {
      const session = await getSession();
      if (!session?.user?.id) {
        throw new Error("User session not available");
      }

      const userId = session.user.id;
      const productData = {
        title,
        description,
        showLogo,
        logoUrl: showLogo ? logoUrl : undefined,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        questions: questions.map(({ id, ...rest }) => rest),
        userId,
      };

      const validationResult = CreateProductSchema.safeParse(productData);

      if (!validationResult.success) {
        const errorMessages = validationResult.error.issues
          .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
          .join("; ");
        throw new Error(`Validation failed: ${errorMessages}`);
      }

      toast.loading("Creating product...", { id: toastId, icon: <Loader /> });

      const result = await createProduct(validationResult.data);

      if (result.success) {
        toast.success(result.message, { id: toastId, icon: "" });
      } else {
        throw new Error(result.message || "Failed to create product");
      }
    } catch (error) {
      console.error("Error in handleSave:", error);

      let errorMessage = "An unexpected error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }

      toast.error(errorMessage, { id: toastId });
    }
  };

  return (
    <div className="grid grid-cols-2 w-full gap-x-4">
      <div className="col-span-1">
        <Badge variant={"default"} className="my-2">
          Live preview
        </Badge>
        <ClientReviewCardComponent />
      </div>
      {/* Live preview ends */}
      <div className="col-span-1">
        <Card className="w-full mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              {existingData
                ? "Edit Testimonial Card"
                : "Customize Your Testimonial Card"}
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
                          updateQuestion(
                            question.id,
                            e.target.value,
                            question.type
                          )
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
              <Save className="mr-2 h-4 w-4" />{" "}
              {existingData ? "Update" : "Save"} Testimonial Card
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
