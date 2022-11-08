import React from 'react'
import chatlogo from 'C:/Users/hp/Desktop/React/chatapp/src/conponents/homecomponents/pic.png'

export default function Chatroom() {
    return (
        <div className='border border-black w-1/2 bg-black text-white relative'>
            <div className='flex justify-between p-3'>
                <div>
                    logo + prototypeChatApp
                </div>
                <div className='float-right'>
                    <div className='flex relative'>
                        <img className='h-8 border border-white rounded-full bg-slate-400 ' src={chatlogo} alt="" />
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div className='absolute bottom-0  w-full h-14 flex  justify-center items-center'>
                <div className='h-8  w-2/3 flex items-center bg-zinc-900 mr-1'>
                    <i className="fa-solid fa-microphone text-slate-400 ml-2"></i>
                    <input className='bg-zinc-900 ml-2 w-full outline-none placeholder:m-2 ' type="text" placeholder='type something...'/>
                </div>
                <div className='h-8  w-1/5 flex items-center bg-zinc-900'>
                    <i className="fa-regular fa-image fa-lg ml-4"></i>
                    <i class="fa-regular fa-paper-plane ml-5"></i>
                </div>

            </div>
        </div>
    )
}
