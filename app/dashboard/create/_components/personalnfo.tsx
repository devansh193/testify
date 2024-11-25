import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PersonalInfo: React.FC = React.memo(() => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="name">
          Your name <span className="text-red-500">*</span>
        </Label>
        <Input id="name" placeholder="Type your name" className="mt-1" />
      </div>

      <div>
        <Label htmlFor="job-title">Job title</Label>
        <Input
          id="job-title"
          placeholder="Software Engineer"
          className="mt-1"
        />
      </div>
    </div>
  );
});

PersonalInfo.displayName = "PersonalInfo";

export default PersonalInfo;
