"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Video,
} from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqItems = [
    {
      question: "How do I add a new product?",
      answer:
        "To add a new product, go to your dashboard and click on the 'Add New Product' button. Fill in the required information and click 'Save'.",
    },
    {
      question: "How can I collect testimonials from my customers?",
      answer:
        "You can collect testimonials by sharing your unique testimonial link with customers, or by using our email integration to automatically request feedback after a purchase.",
    },
    {
      question: "Can I customize the appearance of my testimonials?",
      answer:
        "Yes, you can customize the appearance of your testimonials in the 'Settings' section. You can change colors, fonts, and layout to match your brand.",
    },
    {
      question: "How do I export my testimonials?",
      answer:
        "To export your testimonials, go to the 'Testimonials' page, click on 'Export', and choose your preferred format (CSV, PDF, or JSON).",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">
          Need Help with{" "}
          <Link href={"/"}>
            <span>Testify?</span>
          </Link>
        </h1>
        <p className="text-xl text-center text-gray-600">
          We&apos;re here to assist you in making the most of your testimonials.
        </p>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search for help..."
            className="pl-10 py-6 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="faq" className="space-y-4">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Quick answers to common questions about using Testity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="guides">
            <Card>
              <CardHeader>
                <CardTitle>Guides and Tutorials</CardTitle>
                <CardDescription>
                  Learn how to use Testity effectively with our comprehensive
                  guides.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <Button
                  variant="outline"
                  className="h-auto py-4 px-6 justify-start"
                >
                  <Video className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">
                      Getting Started with Testity
                    </div>
                    <div className="text-sm text-gray-500">
                      Learn the basics in 5 minutes
                    </div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 px-6 justify-start"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">
                      Advanced Testimonial Strategies
                    </div>
                    <div className="text-sm text-gray-500">
                      Maximize the impact of your reviews
                    </div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 px-6 justify-start"
                >
                  <Video className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">
                      Customizing Your Testimonial Display
                    </div>
                    <div className="text-sm text-gray-500">
                      Make your testimonials stand out
                    </div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 px-6 justify-start"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">
                      Integrating Testity with Your Website
                    </div>
                    <div className="text-sm text-gray-500">
                      Seamlessly display testimonials on your site
                    </div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <Link href={"/contact"}>
                  <CardTitle>Contact Our Support Team</CardTitle>
                </Link>
                <CardDescription>
                  Get in touch with our friendly support staff for personalized
                  assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <Button
                  variant="outline"
                  className="h-auto py-4 px-6 justify-start"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Email Support</div>
                    <div className="text-sm text-gray-500">
                      support@testity.com
                    </div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 px-6 justify-start"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Live Chat</div>
                    <div className="text-sm text-gray-500">Available 24/7</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 px-6 justify-start"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Phone Support</div>
                    <div className="text-sm text-gray-500">+91 9999999999</div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle>Join Our Community</CardTitle>
                <CardDescription>
                  Connect with other Testity users, share tips, and get advice
                  from the community.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <Button
                  variant="outline"
                  className="h-auto py-4 px-6 justify-start"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Testity Forum</div>
                    <div className="text-sm text-gray-500">
                      Discuss and share ideas with other users
                    </div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 px-6 justify-start"
                >
                  <HelpCircle className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">User Groups</div>
                    <div className="text-sm text-gray-500">
                      Join industry-specific user groups
                    </div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
