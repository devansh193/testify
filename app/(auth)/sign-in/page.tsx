"use client";

import React, { useEffect, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Logo from "@/components/logo/Logo";
import Link from "next/link";
import { Loader } from "lucide-react";
import Testify from "@/components/logo/testify";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const toastId = toast("Signing in", {
      duration: 5000,
      icon: <Loader className="animate-spin" />,
    });

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!response?.ok) {
        toast.error(`${response?.error}|"Internal server error"`, {
          id: toastId,
          icon: "",
        });
      } else {
        toast.success("Sign in successful.", {
          icon: "",
          id: toastId,
        });
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.", {
        id: toastId,
      });
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-x-2">
            <Logo />
            <Testify />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            And start collecting powerful testimonials
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Label htmlFor="email-address" className="sr-only">
                Email address
              </Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                ref={inputRef}
                autoComplete="email"
                required
                disabled={loading}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                disabled={loading}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              {loading ? <Loader className="animate-spin" /> : "Sign in"}
            </Button>
          </div>
        </form>
        <div className="text-center">
          <a
            href="#"
            className="font-medium text-black hover:text-gray-800 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-black hover:text-gray-800 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
