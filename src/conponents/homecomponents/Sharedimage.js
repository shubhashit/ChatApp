import React from 'react'

export default function Sharedimage(props) {
  return (
    <div>
          <div className='flex m-1 mb-0 justify-evenly' style={{opacity:`${props.opacity}`}}>
              <img className='h-16 w-16 rounded-lg' src={props.imgl} alt="" />
              <img className='h-16 w-16 rounded-lg ' src={props.imgr} alt="" />
          </div>
    </div>
  )
}
