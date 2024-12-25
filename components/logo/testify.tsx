import Link from "next/link";

export default function Testify() {
  return (
    <Link href={"/"}>
      <div className="flex items-center space-x-2">
        <span className="text-2xl text-black font-sans font-semibold">
          testify
        </span>
      </div>
    </Link>
  );
}
