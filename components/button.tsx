import { cn } from "@/app/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const buttonVariant = cva(
  "relative overflow-hidden group px-4 py-2 rounded-lg",
  {
    variants: {
      variant: {
        primary:
          "bg-black hover:bg-gray-300 text-white font-sans font-medium text-2xl px-4 py-3 rounded-xl transition-colors duration-300 ease-in-out",
        secondary:
          "bg-[#452523] hover:bg-[#452523] text-white font-sans font-medium text-2xl px-4 py-3 rounded-xl transition-colors duration-300 ease-in-out",
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
  }
);

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
      <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-in-out">
        {children}
      </span>
      <span className="absolute inset-0 bg-neutral-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
      <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
    </button>
  );
};

export default Button;
