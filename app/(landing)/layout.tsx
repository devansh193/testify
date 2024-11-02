import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};
export default LandingLayout;
