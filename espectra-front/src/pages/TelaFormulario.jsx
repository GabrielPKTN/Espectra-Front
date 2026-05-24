import logo from "../assets/logotipos/logo.png";
import psicopedagogo from "../assets/general_photos/psicopedagogo.png";
import Button from "../components/Button";
import Header from "../components/formulario/HeaderFormulario"; // Importe o Header criado
import app from "../services/api.js"
import GeraSecoes from "../components/formulario/GeraSecoes.jsx"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TelaFormulario() {

  const navigate = useNavigate();
  const [comportamentos, setComportamentos] = useState([]);
  const [respostas, setRespostas] = useState([])

  const { id_paciente, id_usuario } = useParams()

  const requestData = async () => {

    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTc3ODk3NDc4NywiZXhwIjoxMDAwMDE3Nzg5NzQ3ODd9.UcaW9Ocvo6Q8wORRNzKPDSd1ROdN7bC3d-nCn6E482s")

    try {

      const result = await app.get(`/v1/espectra/formulario/${id_paciente}/${id_usuario}`,
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        }
      )

      let rawData = result.data

      let arrayForm = rawData.items

      setComportamentos(arrayForm)

    } catch (error) {
      return false
    }

  }

  useEffect(() => {

    requestData()

  }, [respostas])

  return (
    <div className="min-h-screen bg-[#3277CF] flex flex-col lg:bg-white">
      {/* TOPO: O Header fica fora da div de conteúdo principal */}
      <Header
        title="0 a 6 anos"
        userImage={psicopedagogo} // Troque pela sua lógica de imagem
        userName={"Larissa"}
        logoSource={logo}
      />

      {/* CONTEÚDO BRANCO CHANFRADO */}
      <div className="flex-1 bg-white rounded-t-[20px] px-4 py-8 sm:px-6 md:px-10 lg:px-20 mt-[-30px] shadow-2xl lg:w-[65%] lg:self-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">

          {comportamentos.length > 0 ? (
            <GeraSecoes arrayComportamento={comportamentos} setRespostas={setRespostas} respostas={respostas} />
          ) : (
            <div className="text-center text-gray-500 py-10 animate-pulse">
              Carregando formulário...
            </div>
          )}


          <div className="w-full flex flex-row items-center justify-center gap-4 mt-10">
            <Button className="w-full sm:w-auto px-10 bg-blue-500 hover:bg-blue-600 text-white">
              Cancelar
            </Button>
            <Button className="w-full sm:w-auto px-10 bg-blue-600 hover:bg-blue-700 text-white">
              Enviar
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TelaFormulario;