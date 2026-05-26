import { ChevronLeft } from "lucide-react";

function BotaoVoltar({
    className = "",
    onClick,
    color = "whiteColor"
}){

    

    const variants = {
        whiteColor: "#F9F9F9",
        blueColor: "#3277cf"
    }
    
    return(
        <ChevronLeft 
            onClick={onClick}
            color={`${variants[color]}`}
            className={`size-10 md:size-12 lg:size-11 cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110 relative z-10 ${className}`}
        />
    )
}

export default BotaoVoltar;