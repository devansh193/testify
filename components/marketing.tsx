// import Link from "next/link";
import { Main } from "./Landing/main";
import { Work } from "./Landing/work";

export const Marketing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
    <Main/>
    <Work/>
    </div>
  );
};
