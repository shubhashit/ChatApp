import React from 'react'
import Contactbox from './Contactbox'

export default function Contacts() {
    return (
        <div className='border border-black w-1/3 relative bg-zinc-800 rounded-l-xl '>
            <div className='flex justify-center'>
                <div className='bg-black rounded-lg absolute top-5 h-8 flex items-center'>
                    <i className="fa-solid fa-magnifying-glass bg-black text-white pl-2"></i>
                    <input className='border border-black outline-none bg-black text-white rounded-md w-fit pl-2 placeholder:text-center placeholder:text-xs' type="search" placeholder='Search chat' />
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-blue-500 text-white text-xs w-3/4 h-7 absolute top-16 opa rounded shadow-inherit' >Start a new Chat</button>
            </div>
            <div className=' absolute bottom-0 w-full h-3/4 overflow-hidden'>
                <Contactbox opacity={100}></Contactbox>
                <Contactbox opacity={100}></Contactbox>
                <Contactbox opacity={100}></Contactbox>
                <Contactbox opacity={100}></Contactbox>
                <Contactbox opacity={70}></Contactbox>
                <Contactbox opacity={30}></Contactbox>
                <Contactbox opacity={10}></Contactbox>

            </div>
        </div>
    )
}
