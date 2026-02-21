
const Button = ({className="cursor-pointer", size, children}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground transition-colors duration-300 hover:bg-primary/90 shadow-lg shadow-primary/25";
    const classes = baseClasses;
    const sizeClasses = {
        sm: "px-4 py-1 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-3 text-lg",
    };

    return (
        <button className={`${classes} ${sizeClasses[size] || sizeClasses.default} ${className}`}>

            <span className="relative flex items-center justify-center gap-2">{children}</span>

        </button>
    );
};

export default Button;