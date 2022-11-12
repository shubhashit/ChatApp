import React from 'react'
import chatlogo from 'C:/Users/hp/Desktop/React/chatapp/src/conponents/homecomponents/pic.png'
import pic from 'C:/Users/hp/Desktop/React/chatapp/src/conponents/homecomponents/download.png'
import p2 from './profilepics/p2.jpeg'

export default function Messege(props) {
    return (
        <div className='mt-1 mb-1' style={{ opacity: `${props.opacity}` }}>
            <div className='flex relative ml-4 '>
                <div className='flex items-end m-2'>
                    <img className='h-8  rounded-full bg-slate-400 ' src={p2} alt="" />
                </div>
                <div className='w-1/2 bg-zinc-900 rounded'>
                    <div className='text-xs ml-3 mt-1 text-orange-400'><strong>Username</strong></div>
                    <div className='text-xs ml-3 mb-1' style={{ fontSize: '10px' }}>Lorem ipsum dolor, sit amet consec tetur adipisicing elitaspernatur? Ratione </div>
                </div>
                <div className='flex items-center ml-1 mr-1'>
                    <div className='border border-white rounded-full h-1 w-1 bg-white' style={{ height: '3px', width: '3px' }}></div>
                    <div className='border border-white rounded-full h-1 w-1 bg-white ml-1' style={{ height: '3px', width: '3px', marginLeft: '3px' }}></div>
                    <div className='border border-white rounded-full h-1 w-1 bg-white ml-1' style={{ height: '3px', width: '3px', marginLeft: '3px' }}></div>
                </div>

            </div>
            <div className=' h-4 w-6 ml-16 mt-1 rounded text-xs text-center bg-zinc-900 ' style={{ fontSize: '10px' }}> <span>😂</span><span>3</span></div>
        </div>
    )
}
