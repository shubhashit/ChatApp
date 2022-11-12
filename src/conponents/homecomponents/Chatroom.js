import React from 'react'
import Messege from './Messege'
import chatlogo from 'C:/Users/hp/Desktop/React/chatapp/src/conponents/homecomponents/pic.png'
import p1 from './profilepics/p2.jpeg'

export default function Chatroom() {
    return (
        <div className='border border-black w-1/2 bg-black text-white relative'>
            <div className='flex justify-between p-3'>
                <div>
                    logo + prototypeChatApp
                </div>
                <div className='float-right'>
                    <div className='flex relative '>
                        <div className='text-xs ml-3  mr-2 text-orange-400'><strong>Username</strong></div>
                        <img className='h-8 border border-white rounded-full bg-slate-400 ' src={p1} alt="" />
                    </div>
                </div>
            </div>
            <div className='overflow-hidden h-4/5 flex flex-col-reverse'>
                <Messege opacity ={1}></Messege>
                <Messege opacity ={1}></Messege>
                <Messege opacity ={1}></Messege>
                <Messege opacity ={0.3}></Messege>
                <Messege opacity ={0.1}></Messege>
                {/* <Messege opacity ={1}></Messege> */}
            </div>
            <div className='absolute bottom-0  w-full h-14 flex  justify-center items-center  z-10 bg-black'>
                <div className='h-8  w-2/3 flex items-center bg-zinc-900 mr-1 rounded'>
                    <i className="fa-solid fa-microphone text-slate-400 ml-2"></i>
                    <input className='bg-zinc-900 ml-2 w-full outline-none placeholder:m-2 ' type="text" placeholder='type something...' />
                </div>
                <div className='h-8  w-1/5 flex justify-between items-center bg-zinc-900 rounded'>
                    <i className="fa-regular fa-image fa-lg ml-2"></i>
                    <i class="fa-regular fa-paper-plane mr-3"></i>
                </div>

            </div>
        </div>
    )
}
