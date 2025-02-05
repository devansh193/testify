import Image from "next/image";

interface GLogoProps {
  className?: string;
}

const GLogo: React.FC<GLogoProps> = ({ className }) => {
  return (
    <Image
      src="/google.png"
      alt="GLogo"
      width={30}
      height={30}
      className={className}
    />
  );
};

export default GLogo;
