import Link from "next/link";
import { cn } from "@/lib/utils";

interface TestifyProps {
  className?: string;
}

export default function Testify({ className, ...props }: TestifyProps) {
  return (
    <Link href="/">
      <div className={cn("flex items-center space-x-2", className)} {...props}>
        <span className="text-xl sm:text-2xl text-black font-sans font-semibold">
          testify
        </span>
      </div>
    </Link>
  );
}
