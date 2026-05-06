import CardPaciente from "./card-paciente/CardPaciente"

function ContainerPacientes(props) {

    const arrayPacientes = props.pacientes

    if(arrayPacientes.length > 0) {

        let arrayComponentes = []

        arrayPacientes.forEach(paciente => {

            arrayComponentes.push(CardPaciente(paciente))
        
        })

        for (let i = 0; i < arrayComponentes.length; i++) {
            return <div className="mask-b-to-transparent mask-b-from-95% mask-t-to-transparent mask-t-from-95% scrollbar-custom flex gap-1 py-4 h-[70dvh] relative items-center flex-col overflow-y-auto">
                {arrayComponentes}
            </div>            
        }

    } else {
        return <p className="text-(--bg-primary-color) font-instrument-sans font-semibold text-2xl text-center py-[50%] ">Selecione um paciente, ou adicione um.</p>
    }


}

export default ContainerPacientes