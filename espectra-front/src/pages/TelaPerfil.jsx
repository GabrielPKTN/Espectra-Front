import Logotipo from "../components/logotipo.jsx";
import InputPerfil from "../components/InputPerfil";
import InputSenha from "../components/InputSenha";
import Button from "../components/Button";
import Card from "../components/Card";
import BotaoVoltar from "../components/BotaoVoltar.jsx";
import { CircleUser } from "lucide-react";
import { CircleX } from "lucide-react";
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
                className="flex justify-between items-center w-full h-32.5 md:h-40 lg:h-36.5 px-4 bg-[#3277CF]"
            >
                <BotaoVoltar
                    onClick={() => navigate(-1)}
                    color="whiteColor"
                />

            </div>

            {/* Div da foto do psicopedagogo */}
            <div className="flex justify-center -mt-18 md:-mt-22 lg:-mt-24">

                {usuario[0]?.foto ? (

                    <img
                        src={usuario[0].foto}
                        alt="Foto do psicopedagogo"
                        className="w-auto h-32 border-4 border-[#3277CF] rounded-full object-cover md:w-auto md:h-42 lg:w-auto lg:h-45"
                    />

                ) : (

                    <CircleUser className=" bg-white w-auto h-32 rounded-full object-contain md:w-auto md:h-42 lg:w-auto lg:h-45 text-(--bg-primary-color)" />

                )}


            </div>

            {/* Div do Nome do Psicopedagogo */}
            <div className="flex grow justify-center items-center w-full mt-2 md:mt-8">

                {usuario[0]?.nome ? (

                    <h1 className="text-[#3277CF] text-[28px] md:text-[44px] inclusive-sans font-bold uppercase">
                        {usuario[0].nome}
                    </h1>

                ) : (

                    <h1 className="text-[#3277CF] text-[28px] md:text-[44px] font-inclusive-sans font-bold uppercase">
                        ?
                    </h1>

                )}

            </div>

            {/* Div que guarda os dados do Psicopedagogo */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4 w-full lg:gap-12">

                {/*NOME E DATA NASCIMENTO*/}
                <div className="lg:flex lg:flex-row lg:gap-14">
                    {usuario[0]?.nome ? (

                        <div className="flex justify-center w-full">
                            <InputPerfil
                                label="Nome"
                                value={usuario[0].nome}
                            />

                        </div>

                    ) : (

                        <div className="flex justify-center w-full md:w-1/2">
                            <InputPerfil
                                label="Nome"
                                value="?"
                            />

                        </div>

                    )}


                    {/* Div que guarda Label e Input de Data de Nascimento */}
                    <div className="flex justify-center w-full">

                        {usuario[0]?.data_nascimento ? (

                            <InputPerfil
                                label="Data de Nascimento"
                                value={formatarData(usuario[0].data_nascimento)}
                            />

                        ) : (

                            <div className="flex justify-center w-full md:w-[]">

                                <InputPerfil
                                    label="Data de Nascimento"
                                    value="?"
                                />

                            </div>

                        )}

                    </div>
                </div>
                
                {/*EMAIL E TELEFONE*/}
                <div className="lg:flex lg:flex-row lg:gap-14">

                    {/* Div que guarda Label e Input de Email */}
                    <div className="flex justify-center w-full">

                        {usuario[0]?.email ? (

                            <InputPerfil
                                label="E-mail"
                                value={usuario[0].email}

                            />

                        ) : (

                            <div className="flex justify-center w-full md:w-[]">

                                <InputPerfil
                                    label="E-mail"
                                    value="?"
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
                            />

                        ) : (

                            <div className="flex justify-center w-full md:w-[]">

                                <InputPerfil
                                    label="Telefone"
                                    value="?"
                                />

                            </div>

                        )}

                    </div>
                </div>  

            </div>

            {/* Div dos botões */}
            <div className="flex flex-col justify-center items-center w-full mt-14 gap-4 md:mt-16 lg:flex-row lg:gap-6 lg:mt-26">
                <Button
                    variantClick="editButton"
                    className=" md:h-14 cursor-pointer lg:w-60"
                    color="#FFFFFF"
                    onClick={() => navigate(`/perfil/atualizar/${id_usuario}`)}
                >
                    Editar perfil
                </Button>

                <Button
                    variantClick="basicClick"
                    onClick={() => setAbrirModal(true)}
                    className="md:h-14 cursor-pointer lg:w-60"
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