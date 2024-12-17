import Link from "next/link";

export default function Testify() {
  return (
    <Link href={"/"}>
      <div className="flex items-center space-x-2">
        <span className="text-3xl text-black font-sans font-bold">testify</span>
      </div>
    </Link>
  );
}
