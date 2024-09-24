import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import Logo  from "@/components/Logo";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";

const questions = ["How is pace?", "How is content?", "How is Ui/Ux"];

const Slug = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="p-2 w-[450px]">
        <div className="mb-4">
          <CardHeader className="flex flex-col items-center justify-center gap-y-2">
            <CardTitle>
              <Logo />
            </CardTitle>
            <CardTitle className="text-3xl">finance</CardTitle>
          </CardHeader>
          <CardDescription className="text-center">Review here</CardDescription>
        </div>
        <Separator className="mt-2" />
        <CardHeader className="text-xl font-semibold">Questions</CardHeader>
        <div className="flex flex-col items-start justify-start gap-y-1 px-6">
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
  );
};

export default Slug;
