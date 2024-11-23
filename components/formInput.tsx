import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = React.memo(
  ({ id, label, value, onChange, placeholder }) => {
    return (
      <div>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="mt-1"
        />
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
