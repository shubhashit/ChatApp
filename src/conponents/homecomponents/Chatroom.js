import { async } from '@firebase/util';
import { arrayUnion, doc, onSnapshot, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ChatContext } from '../../Context/ChatContext'
import { db, storage } from '../firebase';
import Messege from './Messege'
import p1 from './profilepics/p2.jpeg'
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../../Context/AuthContext';
import { getDownloadURL,  ref as r, uploadBytesResumable } from 'firebase/storage';

export default function Chatroom() {
    const { currentUser} = useContext(AuthContext);
    console.log(currentUser);
    const { data } = useContext(ChatContext);
    const [messages, setMessages] = useState([])
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const ref = useRef();
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().message)
        })
        return () => {
            unSub()
        }
    }, [data.chatId])
    // useEffect(()=>{
    //     setTimeout(() => {
            
    //         ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });    
    //     }, 100);
    // },[messages])

    console.log(data);
    console.log(messages[1]);
    console.log(Object.entries(messages));
    const handelclick = async () => {
        console.log('hi');
        if(image){
            

            const fileref = r(storage, uuid())
            const uploadTask = uploadBytesResumable(fileref, image);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    console.log(error)
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            message: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                data: Timestamp.now(),
                                img:downloadURL,
                            })
                        })

                    });
                }
            );
        }else{
            console.log(data.chatId);
            await updateDoc(doc(db, "chats", data.chatId), {
                message: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    data: Timestamp.now(),
                })
            })
        }
        await updateDoc(doc(db,"userschats",currentUser.uid),{
            [data.chatId + ".lastMessage"]:{
                text
            },
            [data.chatId+".data"]: serverTimestamp(),
        })
        await updateDoc(doc(db,"userschats",data.user.uid),{
            [data.chatId + ".lastMessage"]:{
                text
            },
            [data.chatId+".data"]: serverTimestamp(),
        })
        setImage(null);
        setText("");
    }
    return (
        <div className='border border-black w-1/2 bg-black text-white relative'>
            <div className='flex justify-between p-3'>
                <div>
                    logo + prototypeChatApp
                </div>
                <div className='float-right'>
                    <div className='flex relative '>
                        <div className='text-xs ml-3  mr-2 text-orange-400'><strong>{data.user.displayName}</strong></div>
                        <img className='h-8 border border-white rounded-full bg-slate-400 ' src={data.user.photoURL} alt="" />
                    </div>
                </div>
            </div>
            <div className='overflow-y-scroll h-4/5 flex flex-col'>
                {Object.entries(messages).sort((a, b) => b[1].date - a[1].date).map((m,index) => {
                    // const img = 
                    console.log('hi');
                    console.log(currentUser.displayName)
                    console.log(currentUser.photoURL)
                    console.log(data.user.uid);
                    console.log(data.user.displayName)
                    console.log(data.user.photoURL)
                    if(m[1].senderId === currentUser.uid){
                        return (<Messege  message={m} key={m.id} text={m[1].text} direction={1} img={m[1].img} sendersUsername= {currentUser.displayName} sendersImg = {currentUser.photoURL}></Messege>)
                    }
                    else{
                        return (<Messege message={m} key={m.id} text={m[1].text} direction={0} img={m[1].img} sendersUsername={data.user.displayName} sendersImg={data.user.photoURL}></Messege>)
                    }
                })}
            </div>
            <div className='absolute bottom-0  w-full h-14 flex  justify-center items-center  z-10 bg-black'>
                <div className='h-8  w-2/3 flex items-center bg-zinc-900 mr-1 rounded'>
                    <i className="fa-solid fa-microphone text-slate-400 ml-2"></i>
                    <input className='bg-zinc-900 ml-2 w-full outline-none placeholder:m-2 ' type="text" placeholder='type something...' onChange={e => setText(e.target.value)} value={text}/>
                </div>
                <div className='h-8  w-1/5 flex justify-between items-center bg-zinc-900 rounded'>
                    <input style={{ display: 'none' }} type="file" name="File" id="sendingfile" onChange={e=>setImage(e.target.files[0])} />
                    <label htmlFor="sendingfile">
                        <i className="fa-regular fa-image fa-lg ml-2"></i>
                    </label>
                    <i className="fa-regular fa-paper-plane mr-3 cursor-pointer" onClick={handelclick}></i>
                </div>

            </div>
        </div>
    )
}
