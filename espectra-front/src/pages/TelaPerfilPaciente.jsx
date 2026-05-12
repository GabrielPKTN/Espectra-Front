import { CircleUser } from 'lucide-react';
import { ChevronLeft } from 'lucide-react'

function TelaPerfilPaciente(){

    return(
        
        <div className=" flex flex-col w-screen h-auto p-2 ">

           { /*HEADER*/}
            <div className='flex flex-row justify-between p-2'>
                <ChevronLeft className='primary-color size-8'/>
                <CircleUser className='primary-color size-10'></CircleUser>
            </div>

            <div className=' flex flex-col justify-center items-center'>
                <CircleUser className='primary-color size-24'></CircleUser>
            </div>
            
        </div>
    )

}

export default TelaPerfilPaciente