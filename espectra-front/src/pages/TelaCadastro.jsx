import logotipo from "../assets/logotipos/logotipo.svg";
import button_unselected from "../assets/general_photos/button_unselected.svg";
import button_selected from "../assets/general_photos/button_select.svg";
import cadeado from "../assets/general_photos/cadeado.svg";
import InputDefault from "../components/InputDefault";
import { use, useState } from "react";
import { LockKeyhole } from "lucide-react";
import { LockKeyholeOpen } from "lucide-react";
import Button from "../components/Button";
import access_control from "../assets/general_photos/access_control.png"

function TelaCadastro() {
  const [inputTocado, setInputTocado] = useState("");

  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");

  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState("");

  const [telefone, setTelefone] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");

  const [dataNascimento, setDataNascimento] = useState("");
  const [erroData, setErroData] = useState("");

  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erroConfirmacao, setErroConfirmacao] = useState("");

  const [isAtivo, setIsAtivo] = useState(false);
  const trocarImagem = () => {
    setIsAtivo(!isAtivo);
  };

  const [mostrarSenha, setMostraSenha] = useState(false);
  const [mostrarConfirmacaoSenha, setMostrarConfirmacaoSenha] = useState(false);

  const alternarVisualizacao = (e) => {
    e.preventDefault();
    setMostraSenha(!mostrarSenha);
  };

  const alternarVisualizacaoConfirmacao = (e) => {
    e.preventDefault();
    setMostrarConfirmacaoSenha(!mostrarConfirmacaoSenha);
  };

  function validarNomeUsuario(e) {
    const valorInserido = e.target.value;

    setNome(valorInserido);

    if (valorInserido.trim() === "") {
      setErroNome("Seu nome não pode estar vazio");
    } else if (/\d/.test(valorInserido)) {
      setErroNome("O nome não pode conter números!");
    } else if (
      /[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]/.test(valorInserido)
    ) {
      setErroNome("Seu nome não pode ter caracteres especiais!");
    } else {
      setErroNome("");
    }
  }

  function validarEmailUsuario(e) {
    const emailInserido = e.target.value.toLowerCase();
    const formatoEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|br)$/;

    setEmail(emailInserido);

    if (emailInserido.trim() === "") {
      setErroEmail("Seu e-mail não pode estar vazio");
    } else if (!formatoEmail.test(emailInserido)) {
      setErroEmail("Seu e-mail deve conter @ e .com ou .br");
    } else {
      setErroEmail("");
    }
  }

  function mascaraTelefone(e) {
    let formato = e.target.value.replace(/\D/g, "");

    if (formato.length <= 10) {
      formato = formato.replace(/^(\d{2})(\d)/g, "($1) $2");
      formato = formato.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      formato = formato.replace(/^(\d{2})(\d)/g, "($1) $2");
      formato = formato.replace(/(\d{5})(\d)/, "$1-$2");
    }

    return formato;
  }

  function validarNumeroTelefone(e) {
    const mascaraUI = mascaraTelefone(e);

    const telefoneInserido = e.target.value.replace(/\D/g, "");
    const formatoTelefone = /^[1-9]{2}(?:[1-8]|9)[0-9]{7,8}$/;

    setTelefone(mascaraUI);

    if (telefoneInserido.trim() === "") {
      setErroTelefone("Informe seu número de telefone");
    } else if (!formatoTelefone.test(telefoneInserido)) {
      setErroTelefone("Digite um número válido!");
    } else {
      setErroTelefone("");
    }
  }

  function mascaraData(formato) {
    return formato
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .substring(0, 10);
  }

  function validarDataNascimento(e) {
    const dataInserida = mascaraData(e.target.value);
    setDataNascimento(dataInserida);

    if (dataInserida.length === 10) {
      const [dia, mes, ano] = dataInserida.split("/").map(Number);
      const dataInformada = new Date(ano, mes - 1, dia);
      const dataAtual = new Date();

      const dataValida =
        dataInformada.getFullYear() === ano &&
        dataInformada.getMonth() === mes - 1 &&
        dataInformada.getDate() === dia;

      if (
        !dataValida ||
        dataInformada > dataAtual ||
        ano < dataAtual.getFullYear() - 120
      ) {
        setErroData("Informe uma data válida!");
      } else if (dataInserida.trim() === "") {
        setErroData("Informe sua data de nascimento!");
      } else {
        setErroData("");
      }
    } else {
      setErroData("Data incompleta");
    }
  }

  function validarSenha(e) {
    const senhaInserida = e.target.value;

    setSenha(senhaInserida);

    const quantidadeLetras =
      (senhaInserida.match(/[a-zA-Z]/g) || []).length >= 3;
    const quantidadeNumeros = (senhaInserida.match(/[0-9]/g) || []).length >= 3;
    const caracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senhaInserida);

    if (senhaInserida.trim() === "") {
      setErroSenha("Informe uma senha!");
    } else if (!quantidadeLetras) {
      setErroSenha("A senha precisa de pelo menos 3 letras");
    } else if (!quantidadeNumeros) {
      setErroSenha("A senha precisa de pelo menos 3 números");
    } else if (!caracterEspecial) {
      setErroSenha("Insira pelo menos 1 caracter especial (Ex:@,#,$,%)");
    } else {
      setErroSenha("");
    }
  }

  function confirmacaoDeSenha(e) {
    const senhaConfirmada = e.target.value;
    setConfirmarSenha(senhaConfirmada);

    if (senhaConfirmada.trim() === "") {
      setErroConfirmacao("Confirme a sua senha!");
    } else if (senhaConfirmada !== senha) {
      setErroConfirmacao("As senhas não coincidem!");
    } else {
      setErroConfirmacao("");
    }
  }

  return (
    // div que guarda tudo que estiver da tela
    <div className="flex flex-col bg-primary-color w-full min-h-screen items-center
    lg:grid lg:grid-cols-2">

      <div className="flex justify-center items-center p-12
      lg:h-full lg:flex lg:flex-col">
        <img src={logotipo} 
        alt="logotipo espectra" 
        className="w-auto h-32 lg:h-28
        " />

        <img src={access_control} alt="photo login" 
        className="hidden 
        lg:block lg:w-auto lg:h-128"/>
      </div>
      
      <div className="bg-white w-screen h-auto rounded-ss-4xl flex flex-col items-center
      lg:w-full lg:rounded-l-4xl lg:shadow-xl">
        <h1 className="primary-color instrument-sans dark-blue font-bold text-2xl p-6
        lg:text-3xl lg:mt-10">
          Cadastro
        </h1>
      

        {/*div que possue as modalidades de cadastro, sendo elas psicopedagogo e familiar*/}
        <div className="flex gap-10 instrument-sans primary-color font-bold
        ">

          <div className="flex gap-2">
            <button onClick={trocarImagem}>
              <img
                src={isAtivo ? button_selected : button_unselected}
                alt="status do button"
              />
            </button>
            <span>Psicopedagogo</span>
          </div>

          <div className="flex gap-2">
            <button onClick={trocarImagem}>
              <img
                src={isAtivo ? button_unselected : button_selected}
                alt="status do button"
              />
            </button>
            <span >Familiar</span>
          </div>
        </div>

        {/*div que carrega as informacoes de cadastro*/}
        <div className="flex flex-col mt-8 max-w-md 
        lg:mt-2">
          {/* NOME */}
          <div className="w-auto flex flex-col p-2">
            <p className="font-semibold text-lg inclusive-sans primary-color">
              Nome
            </p>
            <InputDefault
              value={nome}
              onChange={validarNomeUsuario}
              onBlur={() => setInputTocado(true)}
              variantInput={erroNome ? "errorInput" : "basicInput"}
              name="nome de usuário"
              limiteCaracteres={150}
            />
            {inputTocado && erroNome && (
              <p className="text-red-500 text-sm p-1">{erroNome}</p>
            )}
          </div>

          {/* EMAIL */}
          <div className="w-auto flex flex-col p-2">
            <p className="font-semibold text-lg inclusive-sans primary-color">
              E-mail
            </p>
            <InputDefault
              value={email}
              onChange={validarEmailUsuario}
              onBlur={() => setInputTocado(true)}
              variantInput={erroEmail ? "errorInput" : "basicInput"}
              name="email de usuário"
              limiteCaracteres={255}
            />
            {inputTocado && erroEmail && (
              <p className="text-red-500 text-sm p-1">{erroEmail}</p>
            )}
          </div>

          {/* TELEFONE E DATA DE NASCIMENTO */}
          <div className="flex flex-row">
            {/* TELEFONE */}
            <div className="w-auto flex flex-col p-2">
              <p className="font-semibold text-lg inclusive-sans primary-color">
                Telefone
              </p>
              <InputDefault
                value={telefone}
                onChange={validarNumeroTelefone}
                onBlur={() => setInputTocado(true)}
                variantInput={erroTelefone ? "errorInput" : "basicInput"}
                name="telefone de usuário"
                limiteCaracteres={20}
              />
              {inputTocado && erroTelefone && (
                <p className="text-red-500 text-sm p-1">{erroTelefone}</p>
              )}
            </div>
            {/* DATA DE NASCIMENTO */}
            <div className="w-auto flex flex-col p-2">
              <p className="font-semibold text-lg inclusive-sans primary-color">
                Nascimento
              </p>
              <InputDefault
                value={dataNascimento}
                onChange={validarDataNascimento}
                onBlur={() => setInputTocado(true)}
                variantInput={erroData ? "errorInput" : "basicInput"}
                name="nascimento do usuário"
                limiteCaracteres={10}
                placeholder="DD/MM/AAAA"
              />
              {inputTocado && erroData && (
                <p className="text-red-500 text-sm p-1">{erroData}</p>
              )}
            </div>
          </div>

          {/* SENHA */}
          <div className="w-full flex flex-col p-2">
            <p className="font-semibold text-lg inclusive-sans primary-color">
              Senha
            </p>

            <div className="relative flex items-center w-full">
              <InputDefault
                type={mostrarSenha ? "text" : "password"}
                value={senha}
                onChange={validarSenha}
                onBlur={() => setInputTocado(true)}
                variantInput={erroSenha ? "errorInput" : "basicInput"}
                name="senha de usuário"
                limiteCaracteres={15}
              />

              {/* NECESSÁRIO FAZER O ONCLICK PRA MUDAR O BOTAO E MOSTRAR A SENHA */}
              <button
                type="button"
                onClick={alternarVisualizacao}
                className="absolute right-3 top-1/2 -translate-y-1/2 primary-color"
              >
                {mostrarSenha ? (
                  <LockKeyholeOpen size={27} />
                ) : (
                  <LockKeyhole size={27} />
                )}
              </button>
            </div>

            {inputTocado && erroSenha && (
              <p className="text-red-500 text-sm p-1">{erroSenha}</p>
            )}
          </div>

          {/* REPETIR SENHA */}
          <div className="w-full flex flex-col p-2">
            <p className="font-semibold text-lg inclusive-sans primary-color">
              Confirme a senha
            </p>

            <div className="relative flex items-center w-full">
              <InputDefault
                type={mostrarConfirmacaoSenha ? "text" : "password"}
                value={confirmarSenha}
                onChange={confirmacaoDeSenha}
                onBlur={() => setInputTocado(true)}
                variantInput={erroConfirmacao ? "errorInput" : "basicInput"}
                name="senha de usuário repetida"
                limiteCaracteres={15}
              />

              {/* NECESSÁRIO FAZER O ONCLICK PRA MUDAR O BOTAO E MOSTRAR A SENHA */}
              <button
                type="button"
                onClick={alternarVisualizacaoConfirmacao}
                className="absolute right-3 top-1/2 -translate-y-1/2 primary-color"
              >
                {mostrarConfirmacaoSenha ? (
                  <LockKeyholeOpen size={27} />
                ) : (
                  <LockKeyhole size={27} />
                )}
              </button>
            </div>

            {inputTocado && erroConfirmacao && (
              <p className="text-red-500 text-sm p-1">{erroConfirmacao}</p>
            )}
          </div>
        </div>

        {/* NECESSÁRIO FAZER O ONCLICK PARA FAZER O POST NO BANCO */}
        <div className="m-6 flex flex-col gap-4 items-center">
          <Button
            variantClick="basicClick"
            /* // onClick={} */
          >
            Cadastrar
          </Button>

          <div className="text-center instrument-sans mt-3">
            <p>Já possui uma conta?</p>
            <a /*href= "ROTA DA OUTRA TELA"*/
              className="primary-color font-semibold text-lg"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaCadastro;
