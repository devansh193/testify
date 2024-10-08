import { Footer } from "@/components/footer";

const HelpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default HelpLayout;
