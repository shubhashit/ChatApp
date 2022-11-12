import React from 'react'
import dp from './profilepics/p1.jpg'
import Sharedimage from './Sharedimage'
import Todolist from './Todolist'
import s1 from './sharedpics/s1.webp'
import s2 from './sharedpics/s2.webp'
import s3 from './sharedpics/s3.webp'
import s4 from './sharedpics/s4.webp'
import s5 from './sharedpics/s5.webp'
import s6 from './sharedpics/s6.webp'


export default function media() {
    return (
        <div className='w-2/12 bg-zinc-800 rounded-r-lg'>
            <div className='flex justify-evenly items-center m-2 p-1 bg-black rounded-xl'>
                <div>
                    <img className='h-7 rounded-full' src={dp} alt="" />
                </div>
                <div className='w-1/2 text-white'>
                    <div className='text-xs'><strong>Username</strong></div>
                    <div className='text-xs opacity-60' style={{ fontSize: '10px' }}>Loremipsum  </div>
                </div>
                <div className=' pr-1 pl-1 rounded bg-zinc-800'>
                    <i class="fa-solid fa-moon fa-2xm text-yellow-400 "></i>
                </div>
            </div>
            <div className=' h-2/5 overflow-hidden'>
                <div className='text-white opacity-70 ml-4 text-xs'>
                    To do list
                </div>
                <Todolist></Todolist>
                <Todolist></Todolist>
                <Todolist></Todolist>
                <Todolist></Todolist>
            </div>
            <div className='overflow-hidden ' style={{ height: '45%' }}>
                <div className='text-white opacity-70 ml-3 text-xs'>
                    Shared Images
                </div>
                <div className=' '>
                    <Sharedimage imgl={s1} imgr={s2}></Sharedimage>
                    <Sharedimage imgl={s3} imgr={s4}></Sharedimage>
                    <Sharedimage imgl={s5} opacity = {0.5}></Sharedimage>
                </div>
            </div>
        </div>
    )
}
