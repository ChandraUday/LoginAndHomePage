import React from 'react'
import Nav from './Nav'
import "./css/homescreen.css"


function HomeScreen() {

 
  return (
    <div className='homescreen'>
    
         <div className='header'>
         
           <a href="#" class="logo"><span>B</span>roki.in</a>

           <div className="navbar">
         
                 <a href="#home">home</a>
                 <a href="#Listings">Listings</a>
                 <a href="#onlineorder">Online Order Managment</a>
                 <a href="#Inquiry">Inquiry Form</a>
                 <a href="#gallery">gallery</a>
                 <a href="#Blog">Blog</a>
                 <a href="#contact">contact us</a>
                
            </div>

         </div>

    </div>
  )
}

export default HomeScreen