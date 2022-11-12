import React from 'react'
import td from './profilepics/todolist.jpg'


export default function Todolist() {
  return (
    <div>
          <div className='flex justify-evenly items-center m-2 mr-3 ml-3  p-1 bg-black rounded-xl'>
              <div className='w-1/2 text-white'>
                  <div className='text-xs opacity-70'>shareasong</div>
              </div>
              <div className=' pr-1 pl-1 rounded'>
                  <img className='h-5 rounded-full' src={td} alt="" />
              </div>
          </div>
    </div>
  )
}
