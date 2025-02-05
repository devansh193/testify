import Image from "next/image";

interface PhLogoProps {
  className?: string;
}

const PHLogo: React.FC<PhLogoProps> = ({ className }) => {
  return (
    <Image
      src="/product-hunt.png"
      alt="PH Logo"
      width={30}
      height={30}
      className={className}
    />
  );
};

export default PHLogo;
