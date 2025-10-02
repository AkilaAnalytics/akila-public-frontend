import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useAppContext } from "~/view/context";
import { logoBlackFont } from "~/view/assets";

interface NavLink {
  href: string;
  label: string;
  onClick?: () => void;
}

interface CTAButton {
  label: string;
  onClick: () => void;
  variant: "primary" | "secondary";
}

interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
  homeLink?: string;
  navLinks?: NavLink[];
  ctaButtons?: CTAButton[];
  showDefaultCTAs?: boolean;
  className?: string;
}

export default function LandingPageNavbar({
  logoSrc = logoBlackFont,
  logoAlt = "Akila Analytics logo",
  homeLink = "/",
  navLinks = [],
  ctaButtons = [],
  showDefaultCTAs = true,
  className = "",
}: NavbarProps) {
  const { openChat, toggleCalendly } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Default CTA buttons
  const defaultCTAButtons: CTAButton[] = [
    {
      label: "Schedule a call",
      onClick: toggleCalendly,
      variant: "primary",
    },
    {
      label: "Chat",
      onClick: openChat,
      variant: "secondary",
    },
  ];

  // Use provided CTA buttons or default ones
  const finalCTAButtons =
    ctaButtons.length > 0
      ? ctaButtons
      : showDefaultCTAs
      ? defaultCTAButtons
      : [];

  const handleNavLinkClick = (navLink: NavLink) => {
    if (navLink.onClick) {
      navLink.onClick();
    }
    setIsMenuOpen(false);
  };

  const handleCTAClick = (cta: CTAButton) => {
    cta.onClick();
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to={homeLink}>
              <img src={logoSrc} alt={logoAlt} className="h-full w-full" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 transition-colors hover:text-gray-900"
                onClick={link.onClick}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          {finalCTAButtons.length > 0 && (
            <div className="hidden md:flex items-center space-x-4">
              {finalCTAButtons.map((cta, index) => (
                <button
                  key={index}
                  onClick={cta.onClick}
                  className={`cursor-pointer rounded-lg px-6 py-2.5 text-base font-semibold transition-all duration-200 ${
                    cta.variant === "primary"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                      : "border-2 border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {cta.label}
                </button>
              ))}
            </div>
          )}

          {/* Mobile menu button */}
          <button
            className="cursor-pointer md:hidden text-black relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-white border-t border-gray-200 shadow-lg`}
      >
        <div className="px-4 py-6 space-y-4">
          {/* Mobile Navigation Links */}
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block py-3 text-lg text-gray-600 transition-colors hover:text-gray-900 border-b border-gray-100"
              onClick={() => handleNavLinkClick(link)}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA buttons */}
          {finalCTAButtons.length > 0 && (
            <div className="pt-4 space-y-3">
              {finalCTAButtons.map((cta, index) => (
                <button
                  key={index}
                  onClick={() => handleCTAClick(cta)}
                  className={`w-full cursor-pointer rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 ${
                    cta.variant === "primary"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                      : "border-2 border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {cta.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
