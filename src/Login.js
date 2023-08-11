import React, { useState } from 'react'
import "./css/login.css"
import SignUp from './SignUp';

function Login() {

   const [signIn,SetSignIn] = useState(false);

   const ShowSignUp= (e)=>{
      e.preventDefault();
      SetSignIn(true);
   }
  return (
   <>
    <div className="login">
         <div className='login_header'>
            <img src="https://ixtenso.com/media/manufacturer/3475/logo.jpg" alt="" className='login_logo'/>
             
         </div>

         <div className="login_body">

          {
            signIn ? (<SignUp/>) : (
                <>
                <h1>Buy or Sell Amazing Resturants and Kitchen Outlets.</h1>
                <h2>Check out these amazing outlets recently listed with us</h2>
                <h3>Hot deals and more Discounts than ever.</h3>

              <form className='login_form' onSubmit={ShowSignUp}>
                <input type="text" placeholder='Brokie.in'/>
                <button >Get Started</button>
              </form>
         
                </>
            )
          }
          </div>
         <div className='login_gradient'>

         </div>
    </div>
   </>
  )
}

export default Login