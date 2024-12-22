import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Star, BarChart } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Easy Testimonial Collection",
      description:
        "Create custom forms and landing pages to gather testimonials effortlessly from your satisfied customers.",
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Showcase with Style",
      description:
        "Display your testimonials in beautiful, customizable layouts that match your brand's aesthetic.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-500" />,
      title: "Insightful Analytics",
      description:
        "Gain valuable insights into your testimonials' performance with our comprehensive analytics dashboard.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] mt-12">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold font-sans text-gray-900 sm:text-5xl">
            Powerful Features for Impactful Testimonials
          </h2>
          <p className="mt-4 text-xl font-sans text-gray-500 max-w-3xl mx-auto">
            Discover how Testify empowers your business to collect, manage, and
            showcase customer testimonials effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {feature.icon}
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-16">
          <h3 className="text-3xl font-sans font-bold text-gray-900 mb-8 text-center">
            How Testify Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                1. Create Your Testimonial Campaign
              </h4>
              <p className="text-gray-600">
                Set up a customized testimonial collection form in minutes.
                Choose from various question types, add your branding, and
                create a unique URL for your campaign.
              </p>
              <h4 className="text-2xl font-semibold text-gray-900">
                2. Collect Authentic Testimonials
              </h4>
              <p className="text-gray-600">
                Share your campaign link with customers via email, social media,
                or embed it on your website. Our user-friendly interface makes
                it easy for customers to submit their feedback.
              </p>
              <h4 className="text-2xl font-semibold text-gray-900">
                3. Manage and Curate
              </h4>
              <p className="text-gray-600">
                Review submitted testimonials in your dashboard. Approve, edit,
                or categorize testimonials to ensure quality and relevance.
              </p>
              <h4 className="text-2xl font-semibold text-gray-900">
                4. Showcase and Analyze
              </h4>
              <p className="text-gray-600">
                Display approved testimonials on your website using our
                customizable widgets. Track performance and gain insights with
                our analytics tools.
              </p>
            </div>
            <div className="relative h-96 md:h-auto"></div>
          </div>
        </section>
        <section className="bg-gray-100 rounded-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Harness the Power of Testimonials?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses already using Testify to boost
              credibility and drive conversions.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Start Your Free Trial
            </Button>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How long is the free trial?",
                a: "Our free trial offers 10 free testimonials, giving you ample opportunity to explore all of Testify's features and see how it can benefit your business.",
              },
              {
                q: "Can I customize the design of my testimonial widgets?",
                a: "Testify offers extensive customization options, allowing you to match the look and feel of your testimonial displays to your brand's aesthetic.",
              },
              {
                q: "Is there a limit to how many testimonials I can collect?",
                a: "No, there's no limit to the number of testimonials you can collect with Testify. Our plans are designed to scale with your needs.",
              },
              {
                q: "How does the verification system work?",
                a: "Our verification system uses a combination of email verification, social media authentication, and manual review options to ensure the authenticity of testimonials.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-white shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{faq.a}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
