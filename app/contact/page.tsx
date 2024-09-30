"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }

    if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log({ name, email, message });
    setIsSubmitting(false);
    toast.success("Message sent. We'll get back to you.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              We&apos;d love to hear from you. Please fill out this form or use
              our contact information below.
            </p>
            <dl className="mt-8 space-y-6">
              <dt className="sr-only">Email</dt>
              <dd className="flex items-center">
                <Mail className="h-6 w-6 text-gray-400" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-500">
                  support@testify.com
                </span>
              </dd>
              <dt className="sr-only">Phone number</dt>
              <dd className="flex items-center">
                <Phone className="h-6 w-6 text-gray-400" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-500">
                  +91 999999999
                </span>
              </dd>
              <dt className="sr-only">Address</dt>
              <dd className="flex items-center">
                <MapPin className="h-6 w-6 text-gray-400" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-500">
                  Testify, Alpha-2, Greater Noida
                </span>
              </dd>
            </dl>
          </div>
          <div className="bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-gray-800"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
