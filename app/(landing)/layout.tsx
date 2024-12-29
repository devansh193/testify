import Navbar from "@/components/Navbar";
import NightSky from "@/components/NightSky";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NightSky />
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-28">{children}</main>
    </div>
  );
};

export default LandingLayout;
