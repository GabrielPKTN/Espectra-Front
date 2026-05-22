import fotoPsicopedagogo from "../assets/general_photos/fotoPsicopedagogo.png";
import logo from "../assets/logotipos/logo.png";
import InputPerfil from "../components/InputPerfil";
import InputSenha from "../components/InputSenha";
import Button from "../components/Button";
import Card from "../components/Card";
import { ChevronLeft } from "lucide-react";
import { CircleX } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { LockKeyholeOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PerfilPsicopedagogo() {

    const navigate = useNavigate()

    const [abrirModal, setAbrirModal] = useState(false)

    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    function formatarTelefone(valor) {
        const numeros = valor.replace(/\D/g, "")

        return numeros
            .replace(/^(\d{2})(\d{2})(\d{1})(\d)/, "+$1 $2 $3 $4")
            .replace(/(\d{4})(\d)/, "$1-$2")
            .slice(0, 18)
    }

    function validarSenha() {
        const senhaCorreta = "123456"

        if (senha.trim() === "") {
            setErro("Digite sua senha")
            return
        }

        if (senha !== senhaCorreta) {
            setErro("Senha incorreta")
            return
        }

        setErro("")

        confirmaExclusao()

        navigate("/telaInicial")
    }

    function confirmaExclusao() {
        alert("Sua conta foi excluída com sucesso!")
    }

    function fechar() {
        setAbrirModal(false)
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
                <img
                    src={fotoPsicopedagogo}
                    alt="Foto do psicopedagogo"
                    onClick=""
                    className="w-[148px] h-[148px] border-[#3277CF] border-4 rounded-full object-contain md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]"
                />
            </div>

            {/* Div do Nome do Psicopedagogo */}
            <div className="flex justify-center items-center w-full mt-2">
                <h1 className="text-[#3277CF] text-[28px] md:text-[44px] font-inclusive-sans font-bold uppercase">
                    Larissa Almeida Lessa
                </h1>
            </div>

            {/* Div que guarda os dados do Psicopedagogo */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4 w-full lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">

                {/* Div que guarda Label e Input de Nome */}
                <div className="flex justify-center w-full md:w-[]">
                    <InputPerfil
                        label="Nome"
                        value="Larissa Almeida Lessa"
                        inputClassName="h-[40px] w-[300px] md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                    />
                </div>

                {/* Div que guarda Label e Input de Data de Nascimento */}
                <div className="flex justify-center w-full">
                    <InputPerfil
                        label="Data de Nascimento"
                        value="10/05/2025"
                        inputClassName="h-[40px] w-[300px] md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                    />
                </div>

                {/* Div que guarda Label e Input de Email */}
                <div className="flex justify-center w-full">
                    <InputPerfil
                        label="Email"
                        value="larissa@gmail.com"
                        inputClassName="h-[40px] w-[300px] md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                    />
                </div>

                {/* Div que guarda Label e Input de Telefone */}
                <div className="flex justify-center w-full">
                    <InputPerfil
                        label="Telefone"
                        value={formatarTelefone("+5511999998888")}
                        inputClassName="h-[40px] w-[300px] md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                    />
                </div>
            </div>

            {/* Div dos botões */}
            <div className="flex flex-col justify-center items-center w-full mt-4 md:mt-10 lg:flex-row lg:gap-6">
                <Button
                    variantClick="editButton"
                    className="w-[170px] text-[#3277CF] md:h-[62px] md:w-[320px] lg: cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                    color="#FFFFFF"
                    onClick={() => navigate("/atualizarPerfilPsicopedagogo")} 
                >
                    Editar perfil
                </Button>

                <Button
                    variantClick="basicClick"
                    onClick={() => setAbrirModal(true)}
                    className="mt-2 w-[170px] mb-5 md:h-[62px] md:w-[320px] md:mt-6 cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                >
                    Excluir conta
                </Button>
            </div>

            {
                abrirModal && (
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
                        <div className="relative overflow-hidden">
                            <Card
                                titulo="Tem certeza que deseja excluir essa conta?"
                                descricao="ESSA AÇÃO É IRREVERSÍVEL"
                                corDescricao="text-red-600"
                                classname="h-[400px] font-['Inclusive_Sans'] font-bold"
                                fundo="bg-[#FFFFFF] pt-16"
                            >
                                <CircleX
                                    className="absolute top-4 right-4 h-[26px] w-[26px] cursor-pointer transform-gpu transition-all duration-300 ease-in-out hover:scale-100"
                                    color="#EA1212"
                                    onClick={fechar}
                                />



                                <div className="relative w-[300px] flex flex-col items-center gap-6 mt-10">
                                    <InputSenha
                                        value={senha}
                                        onChange={(e) => {
                                            setSenha(e.target.value)
                                            setErro("")
                                        }}

                                        erro={erro}
                                    />
                                    {
                                        erro && (
                                            <p className="w-full text-left text-[#FF0000] text-sm font-normal">
                                                {erro}
                                            </p>
                                        )
                                    }

                                    <Button
                                        variantClick="basicClick"
                                        onClick={validarSenha}
                                    >
                                        Confirmar
                                    </Button>
                                </div>

                            </Card>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default PerfilPsicopedagogo;