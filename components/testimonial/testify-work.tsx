import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  FileEdit,
  Users,
  CheckSquare,
  BarChart,
  ArrowRight,
} from "lucide-react";

export default function TestifyWork() {
  const steps = [
    {
      icon: <FileEdit className="h-12 w-12 text-blue-500" />,
      title: "Create Campaign",
      description:
        "Set up custom forms and landing pages for testimonial collection.",
    },
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: "Collect Testimonials",
      description: "Gather authentic feedback from satisfied customers easily.",
    },
    {
      icon: <CheckSquare className="h-12 w-12 text-yellow-500" />,
      title: "Manage & Curate",
      description:
        "Review, approve, and categorize testimonials in your dashboard.",
    },
    {
      icon: <BarChart className="h-12 w-12 text-purple-500" />,
      title: "Showcase & Analyze",
      description:
        "Display testimonials and gain insights with analytics tools.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        How Testify Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <Card className="w-full h-full flex flex-col items-center justify-center p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="rounded-full bg-gray-100 p-4 mb-4 inline-block">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-semibold mb-2">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-sm text-gray-600">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center justify-center w-full h-8">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
