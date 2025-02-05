import Image from "next/image";

interface IGLogoProps {
  className?: string;
}

const IGLogo: React.FC<IGLogoProps> = ({ className }) => {
  return (
    <Image
      src="/instagram.jpg"
      alt="IGLogo"
      width={30}
      height={30}
      className={className}
    />
  );
};

export default IGLogo;
