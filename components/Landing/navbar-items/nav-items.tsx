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
    <div className="flex flex-col md:flex-row space-x-6 mt-1">
      {navContent.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="font-sans font-medium hover:bg-white p-2 rounded-lg"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
