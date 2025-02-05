import Image from "next/image";

interface XLogoProps {
  className?: string;
}

const XLogo: React.FC<XLogoProps> = ({ className }) => {
  return (
    <Image
      src="/x.jpg"
      alt="X Logo"
      width={30}
      height={30}
      className={className}
    />
  );
};

export default XLogo;
