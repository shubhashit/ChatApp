import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase';


function Login() {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    console.log('object')
    navigate('/Register');
  }
  const onSignIn = async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email,password);
    await signInWithEmailAndPassword(auth,email,password);
    navigate('/');
  }

  return (
    <div className="mainBox h-screen w-screen flex justify-center items-center bg-black">

      <div className='wrapper p-4 text-white' style={{ backgroundColor: '#222326' }}>
        <form className='ResForm' style={{ backgroundColor: '#222326' }} onSubmit={onSignIn}>
          <div style={{ display: 'block', textAlign: 'center' }} >

            <h3><strong>Prototype ChatApp
            </strong></h3>
            <div className='mb-2'>

              <span>Login</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <input type="email" style={{ backgroundColor: 'lightGrey' }} className="outline-none placeholder:text-center text-center text-black mb-3 rounded-md h-7  form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
            <input type="password" style={{ backgroundColor: 'lightGrey' }} className="placeholder:text-center outline-none text-black mb-3 rounded-md h-7  form-control text-center" id="password" aria-describedby="emailHelp" placeholder='Password' />
          </div>

          <div style={{ display: 'block', textAlign: 'center' }}>
            <button type="submit" className="bg-blue-500 p-2 pt-1 pb-1" >Sign in</button>
          </div>
          <div style={{ display: 'block', textAlign: 'center' }}>
            <span>Do not have an account?<u onClick={navigateToSignUp} className='hover:cursor-pointer'> Sign Up </u></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
