import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import './../Comp/Login.css'
import { Link } from 'react-router-dom';
import loginimg from './../images/login.jpg'

export const Login = () => {

    
    const [action,setAction] = useState("Register")
   

  return (
        <section>
            <div className='container my-5'>
                <div className='row gy-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='left p-4 d-flex flex-column justify-content-center align-items-center'>
                            <h2>{action}</h2>
                            <form className='d-flex flex-column'>
                            {action==="Login"?<div></div>:<input type="text" className='my-2 p-2 rounded-2' placeholder='Name' required />}
                                
                                <input type="email" className='my-2 p-2 rounded-2' placeholder='Email' required />
                                <input type="password" className='my-2 p-2 rounded-2' placeholder='Password' required />
                                {action==="Login"?<div></div>:<Link className='my-2'>Forgot?</Link>}
                                
                            </form>
                            <div className='d-flex justify-content-evenly'>
                                <input type='submit' className={action==="Register"?"submit gray":"submit"} onClick={()=>{setAction("Register")}} id='login-btn' value="Register" />
                                <input type='submit' className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}} id='login-btn' value="Login" />
                            </div>
                        </div>
                    </div> 
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img src={loginimg} className='img-fluid' />
                    </div> 
                </div>
                    
            </div>
        </section>
  )
}
