import { Advert } from "@/components/Landing/advert";
import { Main } from "@/components/Landing/main";

export default function Home() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center pt-8 sm:pt-16 text-white px-4 sm:px-6 lg:px-8">
        <Main />
        <Advert />
      </div>
    </div>
  );
}
