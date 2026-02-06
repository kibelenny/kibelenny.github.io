import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b-2 border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`text-xl font-bold tracking-tight ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {/*<img*/}
              {/*  src={logo}*/}
              {/*  alt="Logo"*/}
              {/*  className={`h-56 w-auto ${isScrolled ? "text-foreground" : "text-primary-foreground"} p-4`}*/}
              {/*/>*/}
              LK.
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-mono text-sm uppercase tracking-wider transition-colors ${
                    isScrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/Lenny-Kibe-Resume.pdf"
                download
                className={`px-4 py-2 font-mono text-sm uppercase tracking-wider border-2 transition-all hover-brutal ${
                  isScrolled
                    ? "border-foreground text-foreground"
                    : "border-primary-foreground text-primary-foreground"
                }`}
              >
                Resume
              </a>
              <ThemeToggle isScrolled={isScrolled} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-primary transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-bold text-primary-foreground uppercase tracking-wider"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/Lenny-Kibe-Resume.pdf"
            download
            className="px-8 py-4 font-bold text-primary bg-primary-foreground uppercase tracking-wider border-2 border-primary-foreground"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
