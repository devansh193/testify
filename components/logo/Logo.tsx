import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function Logo({ className }: Props) {
  return (
    <Link href={"/"}>
      <div
        className={`group ${"bg-[black]"}  hover:bg-neutral-900 rounded-lg px-4 py-1`}
      >
        <h1
          className={cn(
            className,
            "font-bold transition duration-300 group-hover:scale-150 font-sans text-2xl text-white"
          )}
        >
          t
        </h1>
      </div>
    </Link>
  );
}
