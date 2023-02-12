import React, { useContext, useEffect, useState } from 'react'
import { collection, query, where, getDocs, collectionGroup, setDoc, doc, getDoc, updateDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import Contactbox from './Contactbox'
import { AuthContext } from '../../Context/AuthContext';
import { ChatContext } from '../../Context/ChatContext';

export default function Contacts() {
    const currentUser = useContext(AuthContext);
    const {dispatch} = useContext(ChatContext);
    // currentUser = currentUser.currentUser;
    console.log(currentUser.currentUser.uid);
    const [chats,setChats] = useState([]);
    useEffect(()=>{
        
        const getchats = ()=>{

            const unsub = onSnapshot(doc(db, "userschats", currentUser.currentUser.uid),(doc)=>{

                console.log('check');
                console.log(doc);
                setChats(doc.data());
            });
         return()=>{
             unsub();
            }
        }
        currentUser.currentUser.uid && getchats();  
    }, [currentUser.currentUser.uid])
    

    const [initial,setInitial] = useState(null);
    const [username,setUsername] = useState('');
    const [user,setUser] = useState(false);
    const [err,setErr] = useState(false);
    const handleSelect = async ()=>{
        console.log('handle select')
        console.log(user.uid);
        const combinedID = user.uid > currentUser.currentUser.uid 
                            ? user.uid + currentUser.currentUser.uid 
                            : currentUser.currentUser.uid + user.uid ;
        console.log(combinedID);
        
        const docRef = doc(db, "chats", combinedID);
        const docSnap = await getDoc(docRef);
        console.log(docSnap)
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUser(null);
            setInitial(false)
            setUsername("")
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            await setDoc(docRef,{message : []});
            console.log(user)
            await updateDoc(doc(db,"userschats",currentUser.currentUser.uid),{
                [combinedID+".userInfo"]:{
                    uid:user.uid,
                    displayName: user.displayName,
                    photoURL:user.photoURL,
                },
                [combinedID+".date"]:serverTimestamp(),
            })
            await updateDoc(doc(db,"userschats",user.uid),{
                [combinedID+".userInfo"]:{
                    uid: currentUser.currentUser.uid,
                    displayName: currentUser.currentUser.displayName,
                    photoURL: currentUser.currentUser.photoURL,
                },
                [combinedID+".date"]:serverTimestamp(),
            })
            setUser(null);
            setInitial(false)
            setUsername("")
            }
        }
        async function handleSearch() {
            const q = query(collection(db, "users"), where("displayName", "==", username));
            console.log(q);
            try {
                console.log('tyr');
                const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
                setInitial(true);
                console.log(user.uid);
                console.log(currentUser.currentUser.uid);
            });
            if(!querySnapshot.size){
                console.log('null');
                setUser(null);
                setInitial(true);
            }
        } catch (error) {
            setErr(true);
            console.log(error)
        }
    }
    const searchUser = (e)=>{
        setUsername(e.target.value);
        if(e.target.value === "" || e.target.value === " "){
            setInitial(false);
        }
    }
    const onEnter = (e)=>{
       if(e.code === "Enter"){
        handleSearch();
       } 
    }
    const handleContactClick = (u)=>{
        console.log('handleContactClick')
        console.log(u.uid);
        dispatch({
            type:"CHANGE_USER",
            payload : u,
        })
    }
    return (
        <div className='border border-black w-1/3 relative bg-zinc-800 rounded-l-xl '>
            <div className='flex justify-center'>
                <div className='bg-black rounded-lg absolute top-5 h-8 flex items-center'>
                    <i className="fa-solid fa-magnifying-glass bg-black text-white pl-2"></i>
                    <input className='border border-black outline-none bg-black text-white rounded-md w-fit pl-2 placeholder:text-center placeholder:text-xs' type="search" placeholder='Search chat' onChange={searchUser} onKeyDown={onEnter} value={username}/>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-blue-500 text-white text-xs w-3/4 h-7 absolute top-16 opa rounded shadow-inherit' >Start a new Chat</button>
            </div>
            <div className=' absolute bottom-0 w-full h-3/4 overflow-hidden'>
                {!user  && initial &&  <span className='text-white'>user not found</span>}
                {user && <Contactbox user={user} handlleSelect={handleSelect}></Contactbox>}

                {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chats)=>{
                    console.log(chats[1].date);
                    return(
                        <Contactbox opacity={1} key={chats[0]} username={chats[1].userInfo.displayName} lastMessage={chats[1].lastMessage?.text} photoUrl={chats[1].userInfo.photoURL} handleContactClick={handleContactClick} userinfo = {chats[1].userInfo}></Contactbox>
                )})}

                {/* <Contactbox opacity={1}></Contactbox>
                <Contactbox opacity={1}></Contactbox>
                <Contactbox opacity={1}></Contactbox>
                <Contactbox opacity={1}></Contactbox>
                <Contactbox opacity={0.5}></Contactbox>
                <Contactbox opacity={0.1}></Contactbox> */}

            </div>
        </div>
    )
}
