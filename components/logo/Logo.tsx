import Link from "next/link";

export default function TestifyLogo() {
  return (
    <Link href={"/"}>
      <div className="group bg-[white] hover:bg-neutral-800 rounded-lg px-4 py-1">
        <h1 className="text-black font-bold transition duration-300 group-hover:scale-150 font-sans text-2xl">
          t
        </h1>
      </div>
    </Link>
  );
}
