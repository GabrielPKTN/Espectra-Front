import logotipo from "../assets/logotipos/logotipo.svg";
import InputDefault from "../components/InputDefault";
import { useState } from "react";
import Button from "../components/Button";
import authentication from "../assets/general_photos/authentication.png";
import axios from "axios"
import { jsx } from "react/jsx-runtime";
import { data, useNavigate } from "react-router-dom";
import api from "../services/api"


function TelaLogin() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagemErro, setMensagemErro] = useState("");

  async function realizarLogin() {

    try {
      const response = await api.post(
      
        "/v1/espectra/usuario/login",
        {
          email,
          senha
        }
      )
    
      const data = response.data

      localStorage.setItem("token", data.token)
      localStorage.setItem("usuario", JSON.stringify(data.items))

      navigate('/home')


    } catch (error) {
      const status = error.response?.status

      if(status === 400 || status === 404){
        setMensagemErro("Email ou senha inválidos.")
      }

    }
 
  }

  return (
    //div que gurda tudo na tela.
    <div
      className="flex flex-col bg-primary-color w-full min-h-screen items-center
        md:overflow-hidden
        lg:grid lg:grid-cols-2 lg:overflow-hidden"
    >
      {/* div da imagem */}
      <div
        className="flex justify-center items-center p-12
        lg:h-full lg:flex lg:flex-col"
      >
        <img
          src={logotipo}
          alt="logotipo espectra"
          className="w-auto h-32 lg:h-28
                "
        />

        <img
          src={authentication}
          alt="photo login"
          className="hidden 
                lg:block lg:w-auto lg:h-128"
        />
      </div>

      <div
        className="bg-white w-screen grow rounded-ss-4xl flex flex-col items-center
      lg:w-full lg:rounded-l-4xl lg:shadow-xl lg:h-screen lg:justify-center"
      >
        <h1
          className="primary-color instrument-sans dark-blue font-bold text-2xl p-2 mt-4
          md:mt-16
        lg:text-3xl lg:mt-10"
        >
          Login
        </h1>

        {/* div que carrega todas as informações de login */}
        {/* A unica validação que haverá na tela de login será se o usuário foi encontrado ou nao. Para evitar invasoes. */}
        <div
          className="flex flex-col w-full p-3
            md:px-48 md:mt-8
            lg:mt-2 lg:w-187.5"
        >
          {/* EMAIL */}
          <div className="w-auto flex flex-col p-2">
            <p className="font-semibold text-lg inclusive-sans primary-color">
              E-mail
            </p>
            <InputDefault
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setMensagemErro("")
              }}
              name="E-mail usuário"
              limiteCaracteres={255}
            />
          </div>

          {/* SENHA */}
          <div className="w-auto flex flex-col p-2">
            <p className="font-semibold text-lg inclusive-sans primary-color">
              Senha
            </p>
            <InputDefault
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value)
                setMensagemErro("")
              }}
              name="Senha usuário"
              limiteCaracteres={255}
              type={"password"}
            />
          </div>

          {
            mensagemErro && (
              <p className="
                text-red-500
                instrument-sans
                text-sm
                px-4
                mt-2
              "
              >
                {mensagemErro}
              </p>
            )
          }

          <a
            className="flex justify-end mr-4 text-gray-500 underline inclusive-sans"
            //   href="" -> o href vai ser a tela de redefinir senha.
          >
            Esqueci a senha
          </a>
        </div>

        <div
          className="flex flex-col
        md:gap-12"
        >
          <div
            className="mt-8
            md:mt-24
            lg:mt-10"
          >
            <Button 
              variantClick="basicClick"
              onClick={ realizarLogin }
              >
                Entrar
            </Button>
          </div>

          <div
            className="text-center instrument-sans mt-9
            md:mt-20"
          >
            <p>Não possui uma conta?</p>
            <a
              href="/cadastro"
              className="primary-color font-semibold text-lg underline"
            >
              Cadastre-se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaLogin;
