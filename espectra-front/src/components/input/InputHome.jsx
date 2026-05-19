import { Search } from "lucide-react";

function InputHome(

    props

) {


    return (
        <div className="w-full">
            <div className="flex items-center justify-center w-full h-12 relative border-2 border-(--bg-primary-color) rounded-xl">

                <input
                    type="text"
                    value={props.value}
                    className="pl-4 pr-4 h-full w-full font-inclusive-sans rounded-lg focus:outline-none"
                    placeholder={props.placeholder || "Digite o nome do paciente..."}

                    onChange={(event) => {

                        if(props.onChange){
                            props.onChange(event)
                        }

                        if(props.busca){
                            props.busca(event.target.value)
                        }
                    }}

                    onKeyDown={props.onKeyDown}
                />

                <div
                    className="cursor-pointer pr-2"
                    onClick={props.onSearch}
                >
                    <Search className="text-(--bg-primary-color)" />
                </div>

            </div>
        </div>
    )

}

export default InputHome