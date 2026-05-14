import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contactSection", label: "Contact" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);

  // Active link state
  const [activeLink, setActiveLink] = useState("/");

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detect
  useEffect(() => {
    const handleScrollActive = () => {
      // Home active
      if (window.scrollY < 100) {
        setActiveLink("/");
      }

      navLinks.forEach((link) => {
        // Only check section ids
        if (link.href.startsWith("#")) {
          const section = document.querySelector(link.href);

          if (section) {
            const top = section.offsetTop - 150;
            const height = section.offsetHeight;

            if (
              window.scrollY >= top &&
              window.scrollY < top + height
            ) {
              setActiveLink(link.href);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollActive);

    return () =>
      window.removeEventListener("scroll", handleScrollActive);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition duration-500 ${isScroll
        ? "glass-strong py-3"
        : "bg-transparent py-5"
        } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-primary hover:text-foreground user-select-none uppercase cursor-pointer transition"
        >
          <span className="bg-linear-to-r from-blue-500 to-green-800 bg-clip-text text-transparent animate-pulse transition-all duration-400 hover:text-foreground text-2xl md:text-3xl">
            {`<Sagor •/>`}
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">

            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`
                  px-4 py-2 text-sm rounded-full transition-all duration-300

                  ${activeLink === link.href
                    ? "glass-strong text-blue-500"
                    : ""
                  }
                `}
              >
                {link.label}
              </a>
            ))}

          </div>
        </div>

        {/* CTA button */}
        <div className="hidden md:block" id="contact">
          <AnimatedBorderButton>
            <a
              href="https://drive.google.com/file/d/1cPxyXAlubPW-phfl5tF_9aV8XdMCRmXw/view?usp=sharing"
              target="_blank"
            >
              Hire Me
            </a>
          </AnimatedBorderButton>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() =>
            setIsMobileMenuOpen((prev) => !prev)
          }
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
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
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                className={`
                  text-lg py-2 transition-all duration-300

                  ${activeLink === link.href
                    ? "glass-strong text-blue-500"
                    : ""
                  }
                `}
              >
                {link.label}
              </a>
            ))}

            <AnimatedBorderButton
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
              size="lg"
            >
              <a
                href="https://drive.google.com/file/d/1cPxyXAlubPW-phfl5tF_9aV8XdMCRmXw/view?usp=sharing"
                target="_blank"
              >
                Hire Me..
              </a>
            </AnimatedBorderButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;