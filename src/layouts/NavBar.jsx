import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import Button from "../components/Button";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition duration-500 ${isScroll ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a className="text-xl font-bold tracking-tight text-primary hover:text-foreground user-select-none uppercase cursor-pointer transition">
          Sagor Hossain <span className="text-primary">.</span>
        </a>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="hidden md:block" id="contact">
          <AnimatedBorderButton>
            {/* <Download className="w-5 h-5" /> */}
            <button>Hire Me</button>
          </AnimatedBorderButton>
        </div>
        {/* Mobile menu bar */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => setIsMobileMenuOpen(false)} size="lg">
              Hire Me..
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
