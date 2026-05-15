import { useState } from "react";
import { LockKeyhole, LockKeyholeOpen } from "lucide-react";

function InputSenha({
    value,
    onChange,
    erro = false,
    placeholder = "Digite sua senha"
}) {

    const [mostrarSenha, setMostrarSenha] = useState(false)

    return (
        <div className="relative w-[300px]">

            <input
                type={mostrarSenha ? "text" : "password"}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
                    w-full
                    h-[48px]
                    rounded-xl
                    border-2
                    px-4
                    pr-12
                    outline-none
                    transition-all
                    duration-300

                    ${erro
                        ? "border-red-500"
                        : "border-[#3277CF]"
                    }
                `}
            />

            {
                mostrarSenha ? (
                    <LockKeyholeOpen
                        className="
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            cursor-pointer
                            text-gray-500
                        "
                        onClick={() => setMostrarSenha(false)}
                    />
                ) : (
                    <LockKeyhole
                        className="
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            cursor-pointer
                            text-gray-500
                        "
                        onClick={() => setMostrarSenha(true)}
                    />
                )
            }

        </div>
    )
}

export default InputSenha