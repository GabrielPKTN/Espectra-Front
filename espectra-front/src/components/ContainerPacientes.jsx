import CardPaciente from "./card-paciente/CardPaciente"

function ContainerPacientes(props) {

    const arrayPacientes = props.pacientes || []

    const termoDinamico = props.tipoUsuario === "Psicopedagogo" ? "paciente" : "familiar";

    if (arrayPacientes.length > 0) {
        return (
            <div className="mask-b-to-transparent mask-b-from-95% mask-t-to-transparent mask-t-from-95% scrollbar-custom gap-1 py-4 h-[70dvh] relative items-center flex flex-col overflow-y-auto md:grid md:grid-cols-2 md:place-items-center md:mask-t-from-98% md:mask-b-from-98% lg:h-[60dvh] lg:grid-cols-3 lg:px-8 lg:gap-8 lg:place-items-start">
                {arrayPacientes.map((paciente, index) => (
                    <CardPaciente key={paciente.id || index} {...paciente} />
                ))}
            </div>
        );
    } else {
        return (
            <div className="h-full flex items-center justify-center text-center px-4">
                <p className="text-(--bg-primary-color) font-instrument-sans font-semibold text-2xl">
                    Adicione um {termoDinamico}.
                </p>
            </div>
        );
    }

}

export default ContainerPacientes