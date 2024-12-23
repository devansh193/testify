import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const buttonVariant = cva("px-4 py-2 rounded-lg", {
  variants: {
    variant: {
      primary: "bg-black border-black text-white hover:bg-gray-800",
      secondary: "bg-[#034AE0] text-white hover:bg-blue-700",
      link: "hover:underline underline-offset-4 font-normal ",
      ghost: "hover:bg-gray-100 text-black",
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  text?: ReactNode | string;
  icon?: ReactNode;
  loading?: boolean;
}

const Button = ({
  variant,
  size,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariant({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
