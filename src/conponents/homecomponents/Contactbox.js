import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import dp from './profilepics/p1.jpg'
export default function Contactbox(props) {
  const currentUser = useContext(AuthContext);
  const user = currentUser.currentUser;
  // console.log(user);
  console.log(props.username)
  const handleContactClick =()=>{
    props.handleContactClick(props.userinfo);
  }
  return (
    <div className={`flex flex-row relative pl-4 mb-2 mt-2 ${props.user ? "border-b border-b-white" : ""} hover:cursor-pointer hover:scale-105 hover:bg-zinc-900`} onClick={props.handlleSelect ? props.handlleSelect : (handleContactClick)} style={{opacity:`${props.opacity}`}} >
      <div className='inline-block mr-2'>
        <img className='h-8 rounded-full w-8' src={(props.user) ? props.user.photoURL : ((props.photoUrl)?props.photoUrl:dp)} alt="" />
      </div>
      <div className=' w-2/3 text-white text-sm pl-2'>
        <span className='block'><strong>{props.user ? props.user.displayName : ((props.username) ? props.username : "displayname")}</strong></span>
        <span className='text-xs text-zinc-400'>{props.lastMessage}</span>
      </div>
      <div className=' w-1/6 flex items-end justify-center text-white'>
        <div className='flex flex-row justify-center items-center'>
              <div className='border border-white rounded-full h-1 w-1 bg-white'></div><div style={{fontSize :'8px'}}>10m</div>
        </div>
      </div>
    </div>
  )
}
