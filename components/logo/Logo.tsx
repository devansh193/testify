import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

export default function TestifyLogo({ className }: Props) {
  const pathname = usePathname();
  return (
    <Link href={"/"}>
      <div
        className={`group ${
          pathname === "/" ? "bg-[white]" : "bg-black"
        }  hover:bg-neutral-800 rounded-lg px-4 py-1`}
      >
        <h1
          className={cn(
            className,
            "font-bold transition duration-300 group-hover:scale-150 font-sans text-2xl"
          )}
        >
          t
        </h1>
      </div>
    </Link>
  );
}
