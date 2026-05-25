import fotoPsicopedagogo from "../assets/general_photos/fotoPsicopedagogo.png";
import logo from "../assets/logotipos/logo.png";
import InputPerfil from "../components/InputPerfil";
import InputSenha from "../components/InputSenha";
import Button from "../components/Button";
import Card from "../components/Card";
import { ChevronLeft } from "lucide-react";
import { CircleUser } from "lucide-react";
import { CircleX } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { LockKeyholeOpen } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import app from "../services/api.js"
import { parsePhoneNumberFromString } from 'libphonenumber-js'

function PerfilUsuario() {

    const navigate = useNavigate()

    const [usuario, setUsuario] = useState([])

    const [abrirModal, setAbrirModal] = useState(false)

    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    const { id_usuario } = useParams()

    const requestData = async () => {

        try {

            const url = `/v1/espectra/usuario/${id_usuario}`

            const configHeader = {

                headers: {
                    'x-access-token': localStorage.getItem('token')
                }

            }

            const result = await app.get(url, configHeader)

            let reqUsuario = [result.data.items]

            setUsuario(reqUsuario)

        } catch (error) {
            return false
        }

    }

    function formatarTelefone(telefone) {

        let phoneNumber = parsePhoneNumberFromString(telefone, 'BR')

        return phoneNumber

    }

    function formatarData(dataNascimento) {

        let data = dataNascimento.split("-")
        data = `${data[2]}/${data[1]}/${data[0]}`
        return data

    }

    const deletaConta = async (idUsuario, senha) => {

        try {

            localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjMsImlhdCI6MTc3OTY1MDQxNywiZXhwIjoxMDAwMDE3Nzk2NTA0MTd9.qIKgl8RuppPt-ctEy3rP0xxcbd5Mc7oJzlNll7POtTA")

            const url = `/v1/espectra/usuario/`

            idUsuario = Number(idUsuario)

            const configHeader = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token')
                },
                // O corpo da requisição DELETE deve ir explicitamente na propriedade 'data'
                data: {
                    "id": idUsuario,
                    "senha": senha
                }
            };

            const result = await app.delete(url, configHeader)

            navigate("/")

        } catch (error) {
            return false
        }

    }

    function confirmaExclusao() {
        alert("Sua conta foi excluída com sucesso!")
    }

    function fechar() {
        setAbrirModal(false)
    }

    useEffect(() => {
        requestData()
    }, [])

    return (
        <>
            {/* Div do Header */}
            <div
                className="flex justify-between items-center h-32.5 md:h-28 lg:h-36.5 px-4 bg-[#3277CF]"
            >
                <ChevronLeft
                    className="w-7.5 md:w-12 lg:w-12 h-auto cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110 relative z-10"
                    color="#F9F9F9"
                    onClick={() => navigate(-1)}
                />

                <div className="cursor-pointer w-25 relative z-10" onClick={() => navigate("/home")}>
                    <img
                        src={logo}
                        alt="Logo Espectra"
                        className=" w-full h-full transform-gpu transform-all"
                    />
                </div>

            </div>

            {/* Div da foto do psicopedagogo */}
            <div className="flex justify-center z-5 relative md:-mt-22 lg:-mt-24">

                {usuario[0]?.foto ? (

                    <img
                        src={usuario[0].foto}
                        alt="Foto do psicopedagogo"
                        className="w-37 h-37 border-4 border-[#3277CF] rounded-full object-cover md:w-45 md:h-45 lg:w-50 lg:h-50"
                    />

                ) : (

                    <CircleUser className=" bg-white w-37 h-37 rounded-full object-contain md:w-45 md:h-45 lg:w-50 lg:h-50 text-(--bg-primary-color)" />

                )}


            </div>

            {/* Div do Nome do Psicopedagogo */}
            <div className="flex grow justify-center items-center w-full mt-2">

                {usuario[0]?.nome ? (

                    <h1 className="text-[#3277CF] text-[28px] md:text-[44px] font-inclusive-sans font-bold uppercase">
                        {usuario[0].nome}
                    </h1>

                ) : (

                    <h1 className="text-[#3277CF] text-[28px] md:text-[44px] font-inclusive-sans font-bold uppercase">
                        ?
                    </h1>

                )}

            </div>

            {/* Div que guarda os dados do Psicopedagogo */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4 w-full lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">

                {usuario[0]?.nome ? (

                    <div className="flex justify-center w-full md:w-[]">
                        <InputPerfil
                            label="Nome"
                            value={usuario[0].nome}
                            inputClassName="w-full md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                        />

                    </div>

                ) : (

                    <div className="flex justify-center w-full md:w-1/2">
                        <InputPerfil
                            label="Nome"
                            value="?"
                            inputClassName="h-1/2 w-1/2 md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                        />

                    </div>

                )}


                {/* Div que guarda Label e Input de Data de Nascimento */}
                <div className="flex justify-center w-full">

                    {usuario[0]?.data_nascimento ? (

                        <InputPerfil
                            label="Data de Nascimento"
                            value={formatarData(usuario[0].data_nascimento)}
                            inputClassName="h-[40px] w-[300px] md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                        />

                    ) : (

                        <div className="flex justify-center w-full md:w-[]">

                            <InputPerfil
                                label="Data de Nascimento"
                                value="?"
                                inputClassName="h-[40px] w-[300px] md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                            />

                        </div>

                    )}

                </div>

                {/* Div que guarda Label e Input de Email */}
                <div className="flex justify-center w-full">

                    {usuario[0]?.email ? (

                        <InputPerfil
                            label="E-mail"
                            value={usuario[0].email}
                            inputClassName="h-[40px] w-[300px] md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                        />

                    ) : (

                        <div className="flex justify-center w-full md:w-[]">

                            <InputPerfil
                                label="E-mail"
                                value="?"
                                inputClassName="h-[40px] w-[300px] md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                            />

                        </div>

                    )}


                </div>

                {/* Div que guarda Label e Input de Telefone */}
                <div className="flex justify-center w-full">

                    {usuario[0]?.telefone ? (

                        <InputPerfil
                            label="Telefone"
                            value={formatarTelefone(usuario[0].telefone).formatInternational()}
                            inputClassName="h-[40px] w-[300px] md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                        />

                    ) : (

                        <div className="flex justify-center w-full md:w-[]">

                            <InputPerfil
                                label="Telefone"
                                value="?"
                                inputClassName="h-[40px] w-[300px] md:text-[22px] md:h-[55px] md:w-[360px] lg:h-[55px] lg:w-[450px]"
                            />

                        </div>

                    )}

                </div>
            </div>

            {/* Div dos botões */}
            <div className="flex flex-col justify-center items-center w-full mt-4 md:mt-10 lg:flex-row lg:gap-6">
                <Button
                    variantClick="editButton"
                    className="w-[170px] text-[#3277CF] md:h-[62px] md:w-[320px] lg: cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                    color="#FFFFFF"
                    onClick={() => navigate(`/perfil/atualizar/${id_usuario}`)}
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
                                    className="absolute top-4 right-4 h-7 w-7 cursor-pointer"
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
                                        onClick={() => deletaConta(id_usuario, senha)}
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

export default PerfilUsuario;