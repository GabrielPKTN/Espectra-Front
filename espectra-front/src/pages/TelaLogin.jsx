import logotipo from "../assets/logotipos/logotipo.svg";
import InputDefault from "../components/InputDefault";
import { use, useState } from "react";
import Button from "../components/Button";

function TelaLogin() {
  return (
    //div que gurda tudo na tela.
    <div
      className="flex flex-col bg-primary-color w-full min-h-screen items-center
        lg:grid lg:grid-cols-2"
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
      </div>

      <div
        className="bg-white w-screen grow rounded-ss-4xl flex flex-col items-center
      lg:w-full lg:rounded-l-4xl lg:shadow-xl"
      >
        <h1
          className="primary-color instrument-sans dark-blue font-bold text-2xl p-2 mt-4
        lg:text-3xl lg:mt-10"
        >
          Login
        </h1>

        {/* div que carrega todas as informações de login */}
        {/* A unica validação que haverá na tela de login será se o usuário foi encontrado ou nao. Para evitar invasoes. */}
        <div
          className="flex flex-col w-full p-3
            lg:mt-2"
        >
          {/* EMAIL */}
          <div className="w-auto flex flex-col p-2">
            <p className="font-semibold text-lg inclusive-sans primary-color">
              E-mail
            </p>
            <InputDefault
              //   value={}
              //   onChange={}
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
              //   value={}
              //   onChange={}
              name="E-mail usuário"
              limiteCaracteres={255}
            />
          </div>

          <a
            className="flex justify-end mr-4 text-gray-500 underline inclusive-sans"
            //   href="" -> o href vai ser a tela de redefinir senha.
          >
            Esqueci a senha
          </a>
        </div>

        <div className="flex flex-col">
          <div className="mt-8">
            <Button variantClick="basicClick">Entrar</Button>
          </div>

          <div className="text-center instrument-sans mt-9">
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
