import React from 'react'
import add from 'C:/Users/hp/Desktop/React/chatapp/src/conponents/avatar.webp'

export default function Register() {
    return (
        <div className="mainBox h-screen w-screen flex justify-center items-center bg-black" >
            <div className='wrapper text-white p-4' style={{ backgroundColor: '#222326' }}>
                <form className='ResForm' style={{ backgroundColor: '#222326' }}>
                    <div style={{ display: 'block', textAlign: 'center' }} >

                        <h3><strong>Prototype ChatApp
                        </strong></h3>
                        <div className='mb-2'>

                            <span>Register</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" style={{ backgroundColor: 'lightGrey' }} className="placeholder:text-center text-black text-center outline-none mb-3 rounded-md h-7  form-control " id="exampleInputPassword1" placeholder='Username' />
                        <input type="email" style={{ backgroundColor: 'lightGrey' }} className="outline-none placeholder:text-center text-center text-black mb-3 rounded-md h-7  form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                        <input type="password" style={{ backgroundColor: 'lightGrey' }} className="placeholder:text-center outline-none text-black mb-3 rounded-md h-7  form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Password' />
                    </div>
                    <div className="mb-2" >
                        <input type="file" style={{ display: 'none' }} id="file" />
                        <label htmlFor="file" className='flex items-end hover:cursor-pointer'>
                            <img className='mx-2' src={add} alt="" style={{ height: "32px", width: "32px" }} />
                            Choose a file
                        </label>
                    </div>

                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <span> Already have an account??<u className='hover:cursor-pointer'>Login</u></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
