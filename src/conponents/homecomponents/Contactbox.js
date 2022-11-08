import React from 'react'
import chatlogo from 'C:/Users/hp/Desktop/React/chatapp/src/conponents/homecomponents/pic.png'
export default function Contactbox(props) {
  return (
    <div className={`flex flex-row relative pl-4 mb-2 mt-2 opacity-${props.opacity}`}>
      <div className='inline-block mr-2'>
        <img src={chatlogo} alt="" />
      </div>
      <div className=' w-2/3 text-white text-sm pl-2'>
        <span className='block'><strong> Preview name</strong></span>
        <span className='text-xs text-zinc-400'>unread or read messege</span>
      </div>
      <div className=' w-1/6 flex items-end justify-center text-white'>
        <div className='flex flex-row justify-center items-center'>
              <div className='border border-white rounded-full h-1 w-1 bg-white'></div><div style={{fontSize :'8px'}}>10m</div>
        </div>
      </div>
    </div>
  )
}
