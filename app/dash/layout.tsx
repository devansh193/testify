import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DashLayout;
