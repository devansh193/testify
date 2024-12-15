import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";

const FeaturesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default FeaturesLayout;
