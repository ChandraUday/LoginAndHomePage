import React from 'react'
import firebase from 'firebase'
import "./css/nav.css"

function Nav() {

    const handleSignOut = () => {
        firebase.auth().signOut()
          .then(() => {
            
            window.location.href = '/SignUp'; 
          })
          .catch(error => {
            // Handle sign-out error
            console.error('Sign-out error:', error);
          });
      };

      
    return (
        <div className="nav">
             <div className='nav_content'>
                   {/* <img src="https://ixtenso.com/media/manufacturer/3475/logo.jpg" alt="" className='logo'/> */}
                   <button className="nav_logo" onClick = {handleSignOut}>
                    Sign Out
                   </button> 
                    
             </div>
        </div>
      )
}

export default Nav