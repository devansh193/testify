import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-[#A5C8D8] py-8">
      <div className="container px-4 md:px-6">
        <div className="flex items-start justify-around">
          <div>
            <h3 className="font-bold mb-4 font-sans">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-black font-sans hover:text-gray-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-black font-sans hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black font-sans hover:text-gray-900"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-black font-sans hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-black font-sans hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-black font-sans hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-black font-sans hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black font-sans hover:text-gray-900"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black font-sans hover:text-gray-900"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex items-center justify-between">
          <p className="text-sm text-black font-sans text-center">
            © 2024 Testify. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-black font-sans hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Instagram />
            </Link>
            <Link href="#" className="text-black font-sans hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter />
            </Link>
            <Link
              href="https://github.com/devansh193/testify"
              className="text-black font-sans hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
