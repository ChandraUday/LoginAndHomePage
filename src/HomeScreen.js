import React from 'react'
import Nav from './Nav'
import "./css/homescreen.css"
import firebase from 'firebase'


function HomeScreen() {

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
    <div className='homescreen'>
    
         <div className='header'>
         
             <a href="#" class="logo"><span>B</span>roki.in</a>

             <div className="navbar">
         
                 <a class="active" href="#home">home</a>
                 <a href="#Listings">Listings</a>
                 <a href="#onlineorder">Online Order Managment</a>
                 <a href="#Inquiry">Inquiry Form</a>
                 <a href="#gallery">Gallery</a>
                 <a href="#Blog">Blog</a>
                 <a href="#contact">contact us</a>
                
            </div>

            <div>
            <button className="nav_logo" onClick = {handleSignOut}>LogOut</button>
            </div>

         </div>

        <div className='image'>
          <img src='https://c0.wallpaperflare.com/preview/596/279/823/kitchen-interior.jpg' className='imgscreen'/>
        </div>

    </div>
  )
}

export default HomeScreen