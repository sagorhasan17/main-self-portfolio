import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";

import heroBg from "../assets/hero-bg.jpg";
import profile from "../assets/profile-photo.jpg";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import Button from "../components/Button";

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
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden select-none"
    >
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

      {/* dot pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(65)].map(() => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#5271FF",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
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

          <div className="relative animate-fade-in animation-delay-300">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={profile}
                  alt="sagor hasan photo"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Floating Badge  */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 user-select-none">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
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
