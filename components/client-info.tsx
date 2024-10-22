"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRecoilState } from "recoil";
import { emailAtom, imageAtom, nameAtom } from "@/recoil/atom";
import { Button } from "./ui/button";
import { useState } from "react";

export const ClientInfo = () => {
  const [name, setName] = useRecoilState(nameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [image, setImage] = useRecoilState(imageAtom);
  const [error, setError] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email) {
      setError("Please fill name and email.");
    } else {
      console.log(error);
    }
  };

  return (
    <div>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Your information</CardTitle>
          <CardDescription>Please provide your details.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image (optional)</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
            </div>
            {error && (
              <div className="text-red-500 font-semibold" role="alert">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
