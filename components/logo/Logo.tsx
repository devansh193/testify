import Link from "next/link";

export default function TestifyLogo() {
  return (
    <Link href={"/"}>
      <div className="group bg-[black] hover:bg-neutral-800 rounded-lg p-4 py-1">
        <h1 className="text-white font-bold transition duration-400 group-hover:scale-125 font-sans text-xl">
          t
        </h1>
      </div>
    </Link>
  );
}
