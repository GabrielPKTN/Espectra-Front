function InputPerfil({
    label,
    className = "",
    type = "text",
    value
}) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>

            <label className="text-[18px] text-[#797979] instrument-sans font-semibold lg:text-2xl">
                {label}
            </label>

            <input
                type={type}
                value={value}
                readOnly
                className={`flex bg-[#F1F1F1] text-center rounded-lg px-2 w-80 h-10 instrument-sans font-medium text-lg lg:text-[24px] lg:h-14 lg:w-96 ${className}`}
            />
        </div>
    )
}

export default InputPerfil;