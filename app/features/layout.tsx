import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

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
