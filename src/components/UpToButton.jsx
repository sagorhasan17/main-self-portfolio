import { ArrowUpToLine } from "lucide-react";
import { useEffect, useState } from "react";

const UpToButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    let heightToHidden = 700;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    //   for scroll percentage
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;

    const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
    const finalScroolPer = Math.round(scrollPercentage);
    setScrollPercentage(finalScroolPer);

    if (winScroll > heightToHidden) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={goToBtn}
      className={`
      fixed md:w-12 md:h-16 w-8 h-10 rounded-full bg-transparent overflow-hidden
      flex flex-col justify-center items-center
      bottom-2 right-2 z-50 cursor-pointer hover:scale-110 glass hover:bg-primary/10 hover:text-primary
      transition-all duration-500 ease-in-out
      ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
    `}
    >
      <button className="btn btn-primary">
        <ArrowUpToLine className="animate-bounce" />
      </button>
      <p className="text-xs">{scrollPercentage}</p>
    </div>
  );
};

export default UpToButton;
