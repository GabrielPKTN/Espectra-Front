import logo_v1 from "../assets/logotipos/logo_v1.png"

function TelaInicial(){
return(
    <div className="w-screen h-screen">
        <div className="flex justify-between items-center">

            <img src={logo_v1}
                alt="logotipo espectra"
                className="p-4"
                />

            <ul className="flex gap-4 p-6 font-sans font-normal">
                <li>Contato</li>
                <li>Sobre</li>
                <li>Login</li>
            </ul>
        </div>
    </div>
    
)
}

export default TelaInicial;

