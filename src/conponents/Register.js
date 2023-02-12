import React, {  useState } from 'react'
import add from 'C:/Users/hp/Desktop/React/chatapp/src/conponents/avatar.webp'
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import{auth,storage,db} from './firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';

export default function Register() {
    const [error,setError] = useState(0);
//   const currentUser = useContext(AuthContext);
//   console.log(currentUser);

 
    const navigate = useNavigate();
function onSubmit(e){
    e.preventDefault();
    console.log('onclick');
// eslint-disable-next-line
    let user;
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(error);
            setError(1);
            // return;/
            // ..
        });

        console.log('just the check for the error messege')
        // if(setError){return;}
    const fileref = ref(storage, `/files/${email}`)
    const uploadTask = uploadBytesResumable(fileref, file);

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
                console.log('File available at', downloadURL);
                await updateProfile(user,{displayName:username,photoURL:downloadURL});
                console.log(user);
                await setDoc(doc(db, "users", user.uid), {
                    uid : user.uid,
                    displayName:username,
                    email,
                    photoURL:downloadURL
                });
                console.log('first doc is set')
                await setDoc(doc(db, "userschats", user.uid), {});
                console.log('second doc')
                navigate('/');

            });
        }
    );


}









    return (
        <div className="mainBox h-screen w-screen flex justify-center items-center bg-black" >
            <div className='wrapper text-white p-4' style={{ backgroundColor: '#222326' }}>
                <form className='ResForm' style={{ backgroundColor: '#222326' }} onSubmit={onSubmit}>
                    <div className='block text-center'  >

                        <h3><strong>Prototype ChatApp
                        </strong></h3>
                        <div className='mb-2'>

                            <span>Register</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" style={{ backgroundColor: 'lightGrey' }} className="placeholder:text-center text-black text-center outline-none mb-3 rounded-md h-7  form-control " id="Username" placeholder='Username' />
                        <input type="email" style={{ backgroundColor: 'lightGrey' }} className="outline-none placeholder:text-center text-center text-black mb-3 rounded-md h-7  form-control " id="email" aria-describedby="emailHelp" placeholder='Email' />
                        <input type="password" style={{ backgroundColor: 'lightGrey' }} className="placeholder:text-center outline-none text-black mb-3 rounded-md h-7  form-control text-center" id="password" aria-describedby="emailHelp" placeholder='Password' />
                    </div>
                    <div className="mb-2" >
                        <input type="file" style={{ display: 'none' }} id="file" />
                        <label htmlFor="file" className='flex items-end hover:cursor-pointer'>
                            <img className='mx-2' src={add} alt="" style={{ height: "32px", width: "32px" }} />
                            Choose a file
                        </label>
                    </div>

                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <button type="submit" className="bg-blue-500 p-2 pt-1 pb-1" >Sign Up</button>
                    </div>
                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <span> Already have an account??<u className='hover:cursor-pointer' onClick={()=>{navigate('/login')}}>Login</u></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
