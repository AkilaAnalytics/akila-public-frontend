import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useMatches } from "react-router";
import { Triangle, akilaAnalyticsLogo } from "~/view/assets";
import { BookDemo } from "~/view/components";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Use Cases", id: "use-cases" },
    { name: "How it works", id: "how-it-works" },
    { name: "Pricing", id: "pricing", link: "/pricing" },
    { name: "Contact Us", id: "contact-us", link: "/contact-us" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="w-full sticky top-0 z-[999] bg-black px-2 py-[22px] text-xs">
      <div className="relative mx-auto flex w-10/12 items-center justify-between gap-2">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={akilaAnalyticsLogo}
            alt="Akila Analytics logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex mx-auto justify-center items-center space-x-8">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:scale-105 text-white hover:text-gray-300 transition-colors duration-200 font-medium uppercase tracking-wide"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="hidden md:flex ml-auto justify-center items-center space-x-8">
          <button className="button-secondary">
            <Link to="/contact-us">Contact Us</Link>
          </button>
          <button className="button-primary">
            <Link to="/watch-demo">Demo</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-800 md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-gray-300 hover:bg-gray-900 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
