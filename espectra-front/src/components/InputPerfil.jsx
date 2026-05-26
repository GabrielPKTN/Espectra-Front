function InputPerfil({
    label,
    className = "",
    inputClassName = "",
    type = "text",
    value
}) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>

            <label className="text-[18px] text-[#797979]">
                {label}
            </label>

            <input
                type={type}
                value={value}
                readOnly
                className={`bg-[#F1F1F1] text-center rounded-lg px-4 outline-none ${inputClassName}`}
            />
        </div>
    )
}

export default InputPerfil;