import { useMemo } from "react";

const DotBackground = () => {
  const dots = useMemo(() => {
    return [...Array(100)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60 bg-[#5271FF]"
          style={{
            left: dot.left,
            top: dot.top,
            animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default DotBackground;