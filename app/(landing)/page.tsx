import { Advert } from "@/components/Landing/advert";
import { Main } from "@/components/Landing/main";
import { Problem } from "@/components/Landing/problem";
import { Solution } from "@/components/Landing/solution";
// import { Work } from "@/components/Landing/work";

export default function Home() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center pt-8 sm:pt-16 text-white px-4 sm:px-6 lg:px-8 gap-y-4">
        <Main />
        <Advert />
        <Problem />
        <Solution />
        {/* <Work /> */}
      </div>
    </div>
  );
}
