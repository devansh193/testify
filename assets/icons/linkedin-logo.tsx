import Image from "next/image";

interface LILogoProps {
  className?: string;
}

const LILogo: React.FC<LILogoProps> = ({ className }) => {
  return (
    <Image
      src="/linkedin.png"
      alt="LILogo"
      width={30}
      height={30}
      className={className}
    />
  );
};

export default LILogo;
