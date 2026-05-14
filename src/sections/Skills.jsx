import {
    Atom,
    Blocks,
    Code2,
    Database,
    Figma,
    GitBranch,
    Github,
    Globe,
    Layers3,
    Server,
    ShieldCheck,
    Triangle,
    Wind
} from "lucide-react";
import SkillCard from "../components/SkillCard";

const frontendSkills = [
    {
        name: "React",
        icon: Atom,
    },
    {
        name: "Next.js",
        icon: Globe,
    },
    {
        name: "TypeScript",
        icon: Code2,
    },
    {
        name: "Tailwind CSS",
        icon: Wind,
    },
];

const backendSkills = [
    {
        name: "Node.js",
        icon: Server,
    },
    {
        name: "Express.js",
        icon: Layers3,
    },
    {
        name: "MongoDB",
        icon: Database,
    },
    {
        name: "Better Auth",
        icon: ShieldCheck,
    },
];
const uiLibraries = [
    {
        name: "Daisy UI",
        icon: Blocks,
    },
    {
        name: "HeroUi",
        icon: Blocks,
    },
    {
        name: "Material UI",
        icon: Blocks,
    },
    {
        name: "shadcn UI",
        icon: Blocks,
    },
];


const tools = [
    {
        name: "Git",
        icon: GitBranch,
    },
    {
        name: "GitHub",
        icon: Github,
    },
    {
        name: "Figma",
        icon: Figma,
    },
    {
        name: "Vercel",
        icon: Triangle,
    },
];


const Skills = () => {
    return (
        <section id="skills" className="relative overflow-hidden bg-[#020817] py-24">
            {/* Background Blur */}
            <div className="absolute left-[-250px] top-10 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full" />

            <div className="absolute right-[-250px] bottom-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Top Title */}
                <div className="flex flex-col items-center">
                    <div className=" relative px-12 md:px-16 py-4 md:py-5 rounded-[28px] border border-cyan-400/50 bg-[#07111f] shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                        {/* Small Corner Lights */}
                        <div className="absolute top-0 left-4 w-6 h-[2px] bg-cyan-300" />
                        <div className="absolute bottom-0 right-4 w-6 h-[2px] bg-cyan-300" />

                        <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-white">
                            MY SKILLS
                        </h2>
                    </div>

                    {/* Vertical Line */}
                    <div className="w-[2px] h-20 bg-cyan-400/40" />
                </div>

                {/* Top Connector */}
                <div className="hidden absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] lg:block">
                    {/* Frontend Top Connector */}
                    <div className="h-[2px] bg-cyan-400/30 w-full" />

                    {/* Left Dot */}
                    <div className="absolute left-0 top-[-5px] w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />

                    {/* Right Dot */}
                    <div className="absolute right-0 top-[-5px] w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />
                </div>

                {/* Main Content */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-24 mt-14">
                    <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] lg:block">
                        {/* Frontend Top Connector */}
                        <div className="h-[2px] bg-cyan-400/30 w-full" />

                        {/* Left Dot */}
                        <div className="absolute left-0 top-[-5px] w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />

                        {/* Right Dot */}
                        <div className="absolute right-0 top-[-5px] w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />
                    </div>
                    {/* Center Vertical Line */}
                    <div className="hidden lg:block absolute left-1/2 top-[-120px] -translate-x-1/2 w-[2px] h-[408px] bg-cyan-400/30" />

                    {/* Frontend */}
                    <div className="flex flex-col items-center">
                        {/* Frontend Box */}
                        <div className="px-10 py-3 rounded-2xl border border-cyan-400/40 bg-[#07111f] mb-10 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                            <h3 className="text-2xl font-semibold text-white">
                                FRONTEND
                            </h3>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap justify-center gap-5">
                            {frontendSkills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="flex flex-col items-center">
                        {/* Backend Box */}
                        <div className="px-10 py-3 rounded-2xl border border-cyan-400/40 bg-[#07111f] mb-10 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                            <h3 className="text-2xl font-semibold text-white">
                                BACKEND
                            </h3>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap justify-center gap-5">
                            {backendSkills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>


                    {/* Ui Libariy */}
                    <div className="flex flex-col items-center">
                        {/* Ui Libariy Box */}
                        <div className="px-10 py-3 rounded-2xl border border-cyan-400/40 bg-[#07111f] mb-10 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                            <h3 className="text-2xl font-semibold text-white">
                                Ui Libariy
                            </h3>
                        </div>

                        {/* Ui Libariy lists */}
                        <div className="flex flex-wrap justify-center gap-5">
                            {uiLibraries.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-col items-center">
                        {/* Tools Box */}
                        <div className="px-10 py-3 rounded-2xl border border-cyan-400/40 bg-[#07111f] mb-10 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                            <h3 className="md:text-2xl text-xl font-semibold text-white">
                                TOOLS & PLATFORMS
                            </h3>
                        </div>

                        {/* Tools lists */}
                        <div className="flex flex-wrap justify-center gap-5">
                            {tools.map((tool, index) => (
                                <SkillCard key={index} skill={tool} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Middle
                <div className="flex flex-col items-center mt-24">
                    {/* Top Dot */}
                {/* <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" /> */}

                {/* Vertical Line */}
                {/* <div className="w-[2px] h-16 bg-cyan-400/40" /> */}

                {/* Tools Title */}
                {/* <div className="px-10 py-4 rounded-2xl border border-cyan-400/40 bg-[#07111f] shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                        <h3 className="text-2xl font-semibold text-white">TOOLS & PLATFORMS</h3>
                    </div> 
                </div> */}

                {/* Dashed Line */}
                {/* <div className="hidden lg:block relative max-w-5xl mx-auto mt-14"> */}
                {/* <div className="border-t border-dashed border-cyan-400/30" />

                    <div className="absolute left-[10%] top-[-5px] w-3 h-3 rounded-full bg-cyan-300" />

                    <div className="absolute left-[35%] top-[-5px] w-3 h-3 rounded-full bg-cyan-300" />

                    <div className="absolute left-[60%] top-[-5px] w-3 h-3 rounded-full bg-cyan-300" />

                    <div className="absolute left-[85%] top-[-5px] w-3 h-3 rounded-full bg-cyan-300" /> */}
                {/* </div> */}

                {/* Tools */}
                {/* <div className="flex flex-wrap justify-center gap-6 mt-12">
                    {tools.map((tool, index) => (
                        <SkillCard key={index} skill={tool} />
                    ))}
                </div>  */}


            </div>
        </section >
    );
};

export default Skills;
