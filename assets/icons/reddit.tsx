import Image from "next/image";

interface RLogoProps {
  className?: string;
}

const RLogo: React.FC<RLogoProps> = ({ className }) => {
  return (
    <Image
      src="/reddit.png"
      alt="RLogo"
      width={30}
      height={30}
      className={className}
    />
  );
};

export default RLogo;
