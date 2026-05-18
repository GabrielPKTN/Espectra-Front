function SecondButton({
    children,
    onClick,
    variantClick,
    type = "button",
    className = ""
}){
    const estiloBase = "instrument-sans font-bold h-10 w-80 rounded-2xl shadow-md transition-colors duration-200"

    const variants = {
        firstButton: "bg-(--bg-secondary-color) text-white hover:bg-[var(--bg-primary-color)]",
        secondButton: "bg-white primary-color border border-gray-300 shadow-md hover:bg-gray-100",
    };

    return(
        <button
            type={type}
            onClick={onClick}
            className={`${estiloBase} ${variants[variantClick]} ${className}`}
        >
            {children}
        </button>
    );
}

export default SecondButton;