import Image from "next/image";

interface FBLogoProps {
  className?: string;
}

const FBLogo: React.FC<FBLogoProps> = ({ className }) => {
  return (
    <Image
      src="/facebook.png"
      alt="FBLogo"
      width={30}
      height={30}
      className={className}
    />
  );
};

export default FBLogo;
