import Link from "next/link";

export default function Testify() {
  return (
    <Link href={"/"}>
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-black">testify</span>
      </div>
    </Link>
  );
}
