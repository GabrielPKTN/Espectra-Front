import logotipo from "../assets/logotipos/logo.png";

function Logotipo(
    { className = "", }
) {
    return (
        <div className={className}>
            <img src={logotipo} alt="logo" className="w-auto size-8 md:size-10 md:w-auto" />
        </div>
    )
}

export default Logotipo;