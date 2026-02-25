import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import DotBackground from "../components/DotBackground";
import ProfileImg from "../components/ProfileImg";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <DotBackground />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="bg-linear-to-r from-blue-500 to-green-800 bg-clip-text text-transparent text-center animate-fade-in text-3xl md:text-6xl font-bold tracking-wider uppercase">
          About Me
        </h2>
        <p className="text-muted-foreground text-center animate-fade-in animation-delay-100 md:px-70 py-4">
          Hi, I'm Sagor Hossain, a Full Stack Developer specializing in building
          modern, responsive, and user-friendly web applications using React,
          Node.js, Express, and MongoDB. I focus on writing clean, efficient
          code and continuously improving my skills in the ever-evolving web
          development landscape.
        </p>
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left Column  */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>


          {/* Right Column */}
          <div className="space-y-6 pt-16">
            <ProfileImg />


            {/* <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
