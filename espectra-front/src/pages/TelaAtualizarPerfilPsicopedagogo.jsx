import fotoPsicopedagogo from "../assets/general_photos/fotoPsicopedagogo.png";
import logo from "../assets/logotipos/logo.png";
import InputDefault from "../components/InputDefault";
import Button from "../components/Button";
import { ChevronLeft } from "lucide-react";
import { BadgePlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AtualizarPerfilPsicopedagogo() {

    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [erroNome, setErroNome] = useState("")

    const [email, setEmail] = useState("")
    const [erroEmail, setErroEmail] = useState("")

    const [telefone, setTelefone] = useState("")
    const [erroTelefone, setErroTelefone] = useState("")

    const [nascimento, setNascimento] = useState("")
    const [erroNascimento, setErroNascimento] = useState("")

    function alteracoesSalvas() {
        alert("Suas alterações foram salvas com sucesso!")

        navigate("/")
    }

    return (
        <>
            {/* Div do Header */}
            <div
                className="flex justify-between items-center h-[130px] md:h-[115px] lg:h-[146px] px-4 bg-[#3277CF]"
            >
                <ChevronLeft
                    className="-mt-14 -ml-2 w-[31px] h-[31px] md:h-[50px] md:w-[50px] lg:w-[50px] lg:h-[50px] cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                    color="#F9F9F9"
                    onClick={() => navigate("/")}
                />

                <img
                    src={logo}
                    alt="Logo Espectra"
                    onClick="" //onClick -> Volta para a tela Home do Psicopedagogo
                    className="w-[48px] h-[32px] -mt-14 cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                />
            </div>

            {/* Div da foto do psicopedagogo */}
            <div className="flex justify-center -mt-18 z-10 relative md:-mt-22 lg:-mt-24">
                <div className="relative">
                    <img
                        src={fotoPsicopedagogo}
                        alt="Foto do psicopedagogo"
                        onClick=""
                        className="w-[148px] h-[148px] border-[#3277CF] border-4 rounded-full object-contain md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]"
                    />

                    <BadgePlus
                        className="absolute bottom-2 right-2 w-[30px] h-[30px] bg-[#3277CF] rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-110 md:w-[40px] md:h-[40px]"
                        color="#FFFFFF"
                    />
                </div>
            </div>

            {/* Div que guarda os inputs do Psicopedagogo */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4 w-full lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
                <div className="flex flex-col gap-2">
                    <label className="text-left text-[#3277CF] text-[18px] font-semibold">
                        Nome
                    </label>

                    <InputDefault
                        type="text"
                        variantInput="basicInput"
                        value={nome}
                        className="!w-[300px]"
                    />

                    <label className="text-left text-[#3277CF] text-[18px] font-semibold">
                        Email
                    </label>

                    <InputDefault
                        type="text"
                        variantInput="basicInput"
                        value={email}
                        className="!w-[300px]"
                    />
                </div>

                <div className="flex flex-row gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-left text-[#3277CF] text-[18px] font-semibold">
                            Telefone
                        </label>

                        <InputDefault
                            type="text"
                            variantInput="basicInput"
                            value={telefone}
                            className="!w-[140px]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-left text-[#3277CF] text-[18px] font-semibold">
                            Nascimento
                        </label>

                        <InputDefault
                            type="text"
                            variantInput="basicInput"
                            placeholder="DD/MM/AAAA"
                            value={nascimento}
                            className="!w-[140px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4">
                    <Button
                        variantClick="editButton"
                        className="text-[#3277CF] cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                        onClick=""// Navigate para a tela de redefinir senha 
                    >
                        Editar senha
                    </Button>

                    <Button
                    variantClick="editButton"
                        className="text-[#3277CF] cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                        onClick={alteracoesSalvas}
                    >
                        Salvar alterações
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AtualizarPerfilPsicopedagogo;