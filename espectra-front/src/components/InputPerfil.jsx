function InputPerfil({
    label,
    className = "",
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
                className="bg-[#F1F1F1] text-center rounded-lg px-4 h-[40px] w-[192px] outline-none"
            />
        </div>
    )
}

export default InputPerfil;