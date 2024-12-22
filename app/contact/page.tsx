import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GetInTouchPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Have questions about Testify? We&apos;re here to help. Reach out to
            our team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-lg col-span-2 sm:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black">
                Send us a message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Devansh" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Verma" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="devansh@domain.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-gray-400" />
                  <p className="text-gray-600">
                    Testify, Kotdwar, Uttarakhand. 246149
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-gray-400" />
                  <p className="text-gray-600">+91 999999999</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-gray-400" />
                  <p className="text-gray-600">support@testify.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-gray-400" />
                  <p className="text-gray-600">
                    Monday - Friday, 9am - 5pm IST
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">
                  FAQ
                </CardTitle>
                <CardDescription>
                  Quick answers to common questions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black">
                    How do I add a new product?
                  </h4>
                  <p className="text-gray-600">
                    To add a new product, click the Add New Product button on
                    your dashboard, fill in the required information, and click
                    Save.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black">
                    How can I collect testimonials from my customers?
                  </h4>
                  <p className="text-gray-600">
                    Gather testimonials by sharing your unique link with your
                    valued customers effectively.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black">
                    Do you offer customer support?
                  </h4>
                  <p className="text-gray-600">
                    We offer 24/7 customer support via email and live chat for
                    all paid plans.
                  </p>
                </div>
                <Link
                  href="/help"
                  className="text-black font-semibold hover:underline inline-flex items-center"
                >
                  View all FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
