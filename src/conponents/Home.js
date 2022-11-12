import React from 'react'
import Chatroom from './homecomponents/Chatroom'
import Contacts from './homecomponents/Contacts'
import Media from './homecomponents/media'
export default function home() {
    return (
        <div className='flex justify-center items-center h-screen w-screen bg-gray-500' >
            <div className='chatWrappern  w-2/3 h-3/4 flex flex-row relative rounded-l-lg'>
            <Contacts></Contacts>
            <Chatroom></Chatroom>
            <Media></Media>
            </div>
        </div>
    )
}
