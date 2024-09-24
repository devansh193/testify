"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const toastId = toast("Signing in...");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
        toast.error("Failed to sign in. Please check your credentials.", {
          id: toastId,
        });
        console.error(result.error);
      } else {
        toast.success("Sign in successfully.", {
          id: toastId,
        });
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      setError("An unexpected error occurred. Please try again.");
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="grid grid-cols-2">
        <div className="col-span-1 h-screen justify-center items-center hidden md:flex">
          <div className="flex items-center justify-center">
            <Logo name={true} />
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 h-screen flex items-center justify-center bg-blue-50">
          <Card className="min-w-[400px]">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                Sign in to Testify
              </CardTitle>
              <CardDescription className="flex items-center justify-center">
                Enter your credentials to access Testify
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label className="text-black font-semibold">Email</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="devansh@domain.com"
                    disabled={loading} 
                  />
                </div>
                <div>
                  <Label className="text-black font-semibold">Password</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    disabled={loading}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full mt-4"
                  disabled={loading}
                >
                  {loading ? <Loader className="animate-spin"/>  : "Submit"}{" "}
                 
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
