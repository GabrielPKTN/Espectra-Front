import CardPaciente from "./CardPaciente"

function ContainerPacientes(props) {

    const arrayPacientes = props.pacientes

    if(arrayPacientes.length > 0) {

        let arrayComponentes = []

        arrayPacientes.forEach(paciente => {

            arrayComponentes.push(CardPaciente(paciente))
        
        })

        for (let i = 0; i < arrayComponentes.length; i++) {
            return arrayComponentes[i]
        }

    } else {
        return <p className="text-(--bg-primary-color) font-instrument-sans font-semibold text-2xl text-center">Selecione um paciente, ou adicione um.</p>
    }


}

export default ContainerPacientes