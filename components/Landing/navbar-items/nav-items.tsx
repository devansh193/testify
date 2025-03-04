import Link from "next/link";

const navContent = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
export const NavItems = () => {
  return (
    <div className="flex flex-col md:flex-row sm:space-x-4 mt-1">
      {navContent.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="font-sans font-medium text-md text-black p-2 rounded-lg bg-transparent hover:bg-neutral-200 transition-colors duration-200 ease-in-out"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
