// import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full mx-auto bg-neutral-950 pt-2">
      <Navbar />
      <main className="pt-40 pb-20">{children}</main>
      {/* <Footer/> */}
    </div>
  );
};
export default LandingLayout;
