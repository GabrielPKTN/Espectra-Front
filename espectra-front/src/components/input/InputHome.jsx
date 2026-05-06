import { Search } from "lucide-react";

function InputHome() {


    return <div className="relative w-full">
        <input type="text" className="border-2 border-(--bg-primary-color) pl-2 w-full h-9 relative font-inclusive-sans rounded-lg focus:outline-none md:h-11"/>
        <Search className="text-(--bg-primary-color) absolute left-[92%] top-1/2 translate-y-[-50%] size-4 cursor-pointer md:size-5.5"/>
    </div>

}

export default InputHome