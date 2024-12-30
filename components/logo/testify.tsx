import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}
export default function Testify({ className }: Props) {
  return (
    <Link href={"/"}>
      <div className="flex items-center space-x-2">
        <span className={cn(className, "text-3xl font-sans font-semibold")}>
          testify
        </span>
      </div>
    </Link>
  );
}
