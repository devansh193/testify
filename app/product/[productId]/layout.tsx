import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

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
