import InputDefault from "../components/InputDefault"
import defaultPhoto from "../assets/general_photos/default-photo.png"
import  Button from "../components/Button.jsx"
import HeaderResponsavel from "../components/HeaderResponsavel.jsx"
import antonioPhoto from "../assets/general_photos/antonio_photo.png"


function TelaCadastroFamiliar(){
    return(
        <div className="flex flex-col h-screen w-full gap-5">

          <HeaderResponsavel
            nome="Antônio"
            foto={antonioPhoto}
          />

            <div className="flex flex-col items-center gap-10 lg:gap-0 lg:mt-25">
                <img src={defaultPhoto} alt=""  className="w-25 md:w-35"/>

                <div className="flex flex-col gap-2 px-10">

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Nome</span>
                        <InputDefault
                            //value={}
                            //onChange={}
                            
                        />
                    </div>

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">CPF</span>
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

                 
                <div className="flex self-center md:gap-10 md:flex md:flex-row-reverse lg:mt-10">
                    <Button>Salvar</Button>
                    <button className="hidden md:block md:text-[var(--bg-primary-color)] md:instrument-sans md:text-xl md:w-48 md:h-12 md:rounded-lg md:font-bold md:shadow-2xl">Cancelar</button>
                </div>

            </div>

        </div>
    )
}

export default TelaCadastroFamiliar