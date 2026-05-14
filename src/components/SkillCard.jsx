const SkillCard = ({ skill }) => {
    const Icon = skill.icon;

    return (
        <div className="group relative w-[150px] h-[140px] rounded-[22px] border border-cyan-400/30 bg-[#07111f]/90 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-all duration-500 bg-cyan-400/5" />

            {/* Icon Circle */}
            <div className="w-16 h-16 rounded-full bg-[#08192c] border border-cyan-400/10 flex items-center justify-center mb-4">
                <Icon size={32} className="text-cyan-300" />
            </div>

            {/* Text */}
            <h3 className="text-white text-lg font-medium">
                {skill.name}
            </h3>
        </div>
    );
};

export default SkillCard;
