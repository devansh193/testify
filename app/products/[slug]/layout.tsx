import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default ProductLayout;
