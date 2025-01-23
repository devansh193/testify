import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Testify from "./logo/testify";

const footerLinks = [
  {
    title: "Platform",
    items: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "GDPR", href: "/gdpr" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/testify" },
  { icon: Twitter, href: "https://twitter.com/testify" },
  { icon: Instagram, href: "https://instagram.com/testify" },
  { icon: Linkedin, href: "https://linkedin.com/company/testify" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 mt-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-x-2 mb-4">
              <Testify className="h-8 w-8 text-black" />
            </div>
            <p className="text-sm text-gray-500 mb-4 text-center lg:text-left max-w-xs">
              Empowering your platform, step by step. Collect and showcase
              powerful testimonials to boost your credibility.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={`Visit our ${link.icon.name} page`}
                >
                  <link.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-8 lg:gap-12">
            {footerLinks.map((column, index) => (
              <div key={index} className="text-center lg:text-left">
                <h2 className="font-semibold text-gray-900 mb-2 lg:mb-4">
                  {column.title}
                </h2>
                <ul className="space-y-2">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Separator className="bg-gray-200" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-sm text-gray-500">
          © {currentYear} Testify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
