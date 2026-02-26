const CodeCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative md:w-full md:overflow-hidden max-w-full md:max-w-2xl lg:max-w-3xl rounded-lg glass backdrop-blur-xl border border-white/10 shadow-xl md:p-4 sm:p-6">
        {/* Top bar */}
        <div className="flex items-center gap-2 mb-6 px-2 py-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        {/* Code */}
        <pre className="text-sm md:text-base font-mono leading-relaxed text-gray-200 py-2 px-2 overflow-x-auto whitespace-pre-wrap wrap-break-words">
          <code className="block break-all whitespace-pre-wrap max-w-full">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">coder</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-white">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-green-400">name</span>
            <span className="text-white">:</span>{" "}
            <span className="text-yellow-300">'Md.Sagor Hossain'</span>,{"\n"}
            {"  "}
            <span className="text-green-400">skills</span>
            <span className="text-white">:</span>{" "}
            <span className="text-white">[</span>
            <span className="text-yellow-300 md:text-sm text-[12px]">
              "JavaScript","React","NodeJS",
              
              <span className="text-yellow-300 md:text-sm">
                "MongoDB","ExpressJS"
              </span>
            </span>
            <span className="text-white">]</span>,{"\n"}
            {"  "}
            <span className="text-green-400">hardWorker</span>:{" "}
            <span className="text-blue-400">true</span>,{"\n"}
            {"  "}
            <span className="text-green-400">quickLearner</span>:{" "}
            <span className="text-blue-400">true</span>,{"\n"}
            {"  "}
            <span className="text-green-400">problemSolver</span>:{" "}
            <span className="text-blue-400">true</span>,{"\n"}
            {"  "}
            <span className="text-green-400">hireable</span>:{" "}
            <span className="text-purple-400">function</span>
            <span className="text-white">()</span>{" "}
            <span className="text-white">{"{"}</span>
            {"\n"}
            {"    "}
            <span className="text-purple-400">return</span>{" "}
            <span className="text-white">(</span>
            {"\n"}
            {"      "}
            <span className="text-blue-400">this</span>.hardWorker
            {" && "}
            <span className="text-blue-400">this</span>.problemSolver 
            <span className="text-yellow-300 md:text-sm">
              {" && "}
              <span className="text-blue-400">this</span>.skills.length
            </span>
            {" >= "}
            <span className="text-pink-400">5</span>
            {"\n"}
            {"    "}
            <span className="text-white">);</span>
            {"\n"}
            {"  "}
            <span className="text-white">{"}"}</span>
            {"\n"}
            <span className="text-white">{"}"}</span>;
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeCard;
