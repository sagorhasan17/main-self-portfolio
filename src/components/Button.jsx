const Button = ({ children, className = "", size = "md", }) => {
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    return (
        <button
            className={`rounded-full bg-primary text-white font-medium transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95 shadow-md cursor-pointer ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;          