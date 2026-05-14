import InputDefault from "../components/InputDefault"
import antonioPhoto from "../assets/general_photos/antonio_photo.png"
import logo from "../assets/logotipos/logo.png"
import defaultPhoto from "../assets/general_photos/default-photo.png"
import  Button from "../components/Button.jsx"


function TelaCadastroFamiliar(){
    return(
        <div className="flex flex-col h-screen w-full gap-5">

            <header className="flex items-center justify-between p-5">
                <img src={logo} alt=""  className="w-15"/>

                <div className="flex items-center gap-4">
                    <span className="hidden md:block md:instrument-sans md:font-bold md:text-[var(--bg-primary-color)]">Olá Antônio</span>
                    <img src={antonioPhoto} alt=""  className="rounded-full"/>
                </div>

            </header>

            <div className="flex flex-col items-center gap-25">
                <img src={defaultPhoto} alt=""  className="w-25"/>

                <div className="flex flex-col gap-2 px-10">

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Nome</span>
                        <InputDefault
                            //value={}
                            //onChange={}
                            
                        />
                    </div>

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Diagnóstico</span>
                        <InputDefault
                            //value={}
                            //onChange={}
                        />
                    </div>

                    <div className="flex gap-2">

                        <div className="flex flex-col items-start w-[50%]">

                            <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Série escolar</span>

                            <select name="" id="" className="border rounded-lg h-12 w-full border-[var(--bg-primary-color)]">
                                <option value=""></option>
                            </select>

                        </div>

                        <div className="w-[50%]">

                            <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Nascimento</span>

                            <InputDefault
                                //value={}
                                //onChange={}
                                placeholder={"DD/MM/AAAA"}
                            />

                        </div>

                    </div>

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Grau suporte</span>
                        <InputDefault
                            //value={}
                            //onChange={}
                        />
                    </div>
                   
                </div>

                 
                <div className="flex self-center">
                    <Button>Salvar</Button>
                </div>

            </div>

        </div>
    )
}

export default TelaCadastroFamiliar