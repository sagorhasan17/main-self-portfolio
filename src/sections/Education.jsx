import { Award, CalendarDays, School } from "lucide-react";
import DotBackground from "../components/DotBackground";

const educations = [
  {
    title: "Junior School Certificate",
    institution: "Sayed Akbar Ali Memorial High School",
    year: "2018",
    subject: "Science",
    grade: "3.60",
  },
  {
    title: "Secondary School Certificate",
    institution: "Sirajganj Government Technical School and College",
    year: "2019-2020",
    subject: "Science",
    grade: "4.80",
  },
  {
    title: "Diploma in Engineering",
    institution: "Sirajganj Politechnic Institute",
    year: "2021-2022",
    subject: "Computer Science and Engineering",
    grade: "GPA: Ongoing... (8th Semester)",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-10 relative overflow-hidden">
      <DotBackground />
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <span
            className="bg-linear-to-r from-blue-500 to-green-800 bg-clip-text text-transparent text-3xl md:text-6xl font-bold tracking-wider uppercase animate-fade-in"
          >
            Education
          </span>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200 pt-4 md:px-90"
          >
            A passionate web developer with experience in the METN stack, eager
            to contribute to innovative projects and grow in the tech industry
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 250}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {idx !== educations.length - 1 && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-left"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="md:text-4xl text-2xl bg-linear-to-r from-blue-500 to-green-800 bg-clip-text text-transparent font-bold">
                      {edu.title}
                    </span>
                    <h3 className="md:text-xl text-md text-muted-foreground font-semibold mt-2 mb-1 flex items-center gap-2">
                      <School size={20} />
                      {edu.institution}
                    </h3>
                    <p className="text-muted-foreground my-4 mb-1 flex gap-2">
                      <CalendarDays />
                      {edu.year}
                    </p>
                    <p
                      className={`flex gap-2 text-sm my-4 border border-primary text-primary p-2 ${edu.grade == "GPA: Ongoing... (8th Semester)" ? "w-70" : "w-30"} rounded-md`}
                    >
                      <Award size={20} />
                      {`GPA: ${edu.grade}`}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
