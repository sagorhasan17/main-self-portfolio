import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";

import heroBg from "../assets/hero-bg.jpg";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import Button from "../components/Button";
import CodeCard from "../components/CodeCard";
import DotBackground from "../components/DotBackground";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Figma",
  "Git",
  "GitHub Actions",
];
  
const Hero = () => {
  const [text] = useTypewriter({
  words: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
  loop: true,
  typeSpeed:120,
});

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden select-none"
    >
      <DotBackground />
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b via-transparent/80 from-background/20 to-background"></div>
      </div>
      {/* add gradient */}


      {/* content */}
      <div className="container mx-auto px-6 pt-20 md:pt-1 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left content text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Web Developer • React Specialist
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="leading-tight animate-fade-in animation-delay-100 glass px-2 py-1 md:w-full rounded-md animate-pulse">
                <span className="text-muted-foreground text-md md:text-5xl animate-pulse">Hello</span>, <span className="animate-pulse text-[18px] md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-500 to-green-800 bg-clip-text text-transparent">I`m Md Sagor Hossain</span>
              </h1>
              <h1 className="text-xl md:text-4xl lg:text-4xl font-bold bg-linear-to-r from-blue-500 to-green-800 bg-clip-text text-transparent leading-tight pr-4 pl-1 w-2xs md:w-full">{`I'm a ${text}`}
                <span>
                  <Cursor
                    cursorBlinking
                    cursorStyle="|"
                    cursorColor="#10b981"
                  />
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in pr-22 md:pr-1 animation-delay-200">
                Hi, I'm Sagor Hossain — a Web Developer in React, Next.js, and
                TypeScript. I build scalable, performant web Website that users
                love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animation-fade-in animation-delay-300">
              <Button size="lg" className="animate-fade-in animation-delay-300">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                <a
                  href="https://drive.google.com/file/d/1wy6m2FtPXmwgA1xzPnWz7PxMbN2J3n57/view?usp=sharing"
                  target="_blank"
                >
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span>Follow:</span>
              {[
                { icon: Github, href: "https://github.com/sagorhasan17" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sagor-hossain17/",
                },
                { icon: Youtube, href: "https://www.youtube.com/@codealoy" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* right contect like image  */}

          <div className="relative animate-fade-in animation-delay-300 w-88 md:w-full -mt-4 md:mb-0">
            {/* profile image */}
            <CodeCard />
     
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
