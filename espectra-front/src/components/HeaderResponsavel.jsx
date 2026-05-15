
import logo from "../assets/logotipos/logo.png"
import backArrow from "../assets/general_photos/backArrow.svg"

export default function HeaderResponsavel({nome, foto}){
    return(
        <header className="flex items-center justify-between p-5 lg:bg-[var(--bg-primary-color)]">
            <img src={logo} alt=""  className="w-15 md:hidden lg:block lg:w-20"/>
            <img src={backArrow} alt="" className="hidden md:block lg:hidden"/>

            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                    <p className="
                        hidden 
                        md:block md:instrument-sans md:font-bold md:text-[var(--bg-primary-color)] 
                        lg:text-white lg:text-3xl"
                        >
                            Olá {nome}!
                    </p>
                    <span className="hidden lg:block lg:text-white underline lg:self-end lg:instrument-sans lg:italic">Abrir perfil</span>
                </div>
                
                <img src={foto} alt=""  className="rounded-full lg:w-18"/>
            </div>
    </header>
    )
}