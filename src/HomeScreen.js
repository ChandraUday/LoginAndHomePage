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
         
             <a href="#" className="logo"><span>B</span>roki.in</a>

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


        {/* home image is here */}
         <div className='image'>
          <img src='https://c0.wallpaperflare.com/preview/596/279/823/kitchen-interior.jpg' className='imgscreen'/>
         </div>

         <div className='banner_fade'>

         </div>


         {/* listing section starts */}

     <div className='listing'>
          <h1 className="heading">
             <span>L</span>
             <span>i</span>
             <span>s</span>
             <span>t</span>
             <span>i</span>
             <span>n</span>
             <span>g</span>
          </h1>

        <div className="box-container">

            <div className="box">
                <img src="https://t3.ftcdn.net/jpg/02/18/76/74/360_F_218767403_D9LFT8YtPpGuosaD46mCga8awYJhdKth.jpg" alt=""/>
                 <div className="content">
                     <h3>Cloud / Base Kitchen for Lease in Udyog Vihar Ph 4</h3>
                    <p>Area of 200 sqft,large spacing and mini parking</p>
                    
                    <div className="price">24 Lacs <span>25 Lacs</span></div>
                    <a href="#" className="btn">for Sale</a>
                 </div>
            </div>

            <div className="box">
                <img src="https://as2.ftcdn.net/v2/jpg/06/22/11/25/1000_F_622112502_UttgifTZppVCJZleHQUXqJXkAViOMPXv.jpg" alt=""/>
                 <div className="content">
                     <h3>Base kitchen Space available for lease in Dwarka Sector 3</h3>
                    <p>Basic layout kitchen with new exhaust and utensils.</p>
                    
                    <div className="price">41 Lacs <span>45 Lacs</span></div>
                    <a href="#" className="btn">book now</a>
                 </div>
            </div>

            <div className="box">
                <img src="https://assets.indiabizforsale.com/business/upload_pic/whatsapp_image_2019_08_08_at_18_3f10e5e5729c9d8c69ac2c52cfebeeab.jpeg" alt=""/>
                 <div className="content">
                     <h3>Cafe For Sale in Vile Parle Mumbai near andheri</h3>
                    <p>Beautifully nature gifted place for a cup of coffee.</p>
                    
                    <div className="price">7 Lacs <span>8 Lacs</span></div>
                    <a href="#" className="btn">book now</a>
                 </div>
            </div>

            <div className="box">
                <img src="https://coffeeshopstartups.com/wp-content/uploads/2021/02/things-to-sell-at-a-coffee-shop-2-1024x683.jpg" alt=""/>
                 <div className="content">
                     <h3>Cafe setup for SALE in Ghaziabad near National Highway</h3>
                    <p>Area of 3400sqft ,spaceous.</p>
                    
                    <div className="price">2.5 Lacs <span>3 Lacs</span></div>
                    <a href="#" className="btn">book now</a>
                 </div>
            </div>

            <div className="box">
                <img src="https://www.holidify.com/images/cmsuploads/compressed/cafe_20190807140806.jpg" alt=""/>
                 <div className="content">
                     <h3>Running Restaurant for Sale in Gurgaon Sector 31</h3>
                    <p>Area of 4000 sqft</p>
                    
                    <div className="price">11 Lacs <span>13 Lacs</span></div>
                    <a href="#" className="btn">book now</a>
                 </div>
            </div>

            <div className="box">
                <img src="https://media.timeout.com/images/105979763/image.jpg" alt=""/>
                 <div className="content">
                     <h3>Cloud kitchen for sale in Hyderabad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    
                    <div className="price">17 Lacs <span>19 Lacs</span></div>
                    <a href="#" className="btn">book now</a>
                 </div>
            </div>

            <div className="box">
                <img src="https://inspirationdesignbooks.com/blog/wp-content/uploads/2018/10/World%E2%80%99s-best-coffee-shops-for-Design-Lovers-1.jpg" alt=""/>
                 <div className="content">
                     <h3>Running Restaurant for sale on Sohna Road , Gurgaon</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    
                    <div className="price">12 Lacs <span>13 Lacs</span></div>
                    <a href="#" className="btn">book now</a>
                 </div>
            </div>

            <div className="box">
                <img src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/01/People-sitting-outside-Grandmama%E2%80%99s-All-Day-Cafe-in-Mumbai-OG-ss15012018.jpg" alt=""/>
                 <div className="content">
                     <h3>Cafe For Sale in Kalkaji ,near moti nagar,new delhi</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    
                    <div className="price">21 Lacs <span>23 Lacs</span></div>
                    <a href="#" className="btn">book now</a>
                 </div>
            </div>

            <div className="box">
                <img src="https://lh3.googleusercontent.com/4bcdk7-iE4a6r-IXMaYrdqNsW200YT0DxZmVO5KpziJCIQKLQ-YI4JjcpGtr0ijclix5dHAIBBiqH3C9ipLFrb4Sgvsi0tNUBahnIpHI=w1000?s=300" alt=""/>
                 <div className="content">
                     <h3>Buug & Burker cafe  Mumbai</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    
                    <div className="price">17 Lacs <span>21 Lacs</span></div>
                    <a href="#" className="btn">book now</a>
                 </div>
            </div>

    
        </div>
       </div> 
             {/* listing section ends here */}

       {/* inquiry section starts */}

     <div className="inquiry">
           <h1 className="heading">
                <span>I</span>
                <span>n</span>
                <span>q</span>
                <span>u</span>
                <span>i</span>
                <span>r</span>
                <span>y</span>
                <span className="space"></span>
                <span>f</span>
                <span>o</span>
                <span>r</span>
                <span>m</span>
            </h1>

        <div className="row">

              <div className="image">
                  <img src="https://www.vai.org/wp-content/uploads/2022/06/Inquiry-stamp-1.jpg" alt=""/>
              </div>

              <form action="">
          
                    <div className="inputBox">
                    <h3>Your Name</h3>
                    <input type="text" placeholder="person name"/>
                    </div>

                   <div className="inputBox">
                    <h3>Email</h3>
                    <input type="email" placeholder="Email address"/>
                   </div>

                   <div className="inputBox">
                   <h3>Message</h3>
                  <input type="message"  placeholder="your's message"/>
                  </div>

                  <div className="inputBox">
                    <h3>Date of inquiry</h3>
                    <input type="date"/>
                  </div>

                  <input type="submit" class="btn" value="send"/>
                </form>
            </div>
        
   </div>

{/* inquiry section ends    */}


 {/* gallery section starts  */}
    <div className="gallery" >
            
        <h1 className="heading">
            <span>g</span>
            <span>a</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
            <span>r</span>
            <span>y</span>
        </h1>
        <div className="box-container">
           
            <div class="box">
                <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Nukkad-SDA.jpg" alt=""/>
                <div className="content">
                    <h3>Sundar Plaza</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Expedita, dolorem odit rerum voluptatem quas nam.</p>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="https://imgmedia.lbb.in/media/2019/10/5db92edb6510bb46a02c3f83_1572417243236.jpg" alt=""/>
                <div className="content">
                    <h3>Amazing places</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Expedita, dolorem odit rerum voluptatem quas nam.</p>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="https://www.ucityguides.com/images/top10/cafe-central.jpg" alt=""/>
                <div className="content">
                    <h3>Amazing places</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Expedita, dolorem odit rerum voluptatem quas nam.</p>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="https://www.myyellowplate.com/wp-content/uploads/2021/08/Cafe-Simla-Times-Shimla.jpg" alt=""/>
                <div className="content">
                    <h3>Amazing places</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Expedita, dolorem odit rerum voluptatem quas nam.</p>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="https://imgmedia.lbb.in/media/2023/04/642d7430c7db3737910fd51c_1680700464229.jpg" alt=""/>
                <div className="content">
                    <h3>Amazing places</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Expedita, dolorem odit rerum voluptatem quas nam.</p>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/Cha-bar-cp.jpg" alt=""/>
                <div className="content">
                    <h3>Amazing places</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Expedita, dolorem odit rerum voluptatem quas nam.</p>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="https://www.holidify.com/images/cmsuploads/compressed/windviewcafe_20180327144957.jpg" alt=""/>
                <div className="content">
                    <h3>Amazing places</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Expedita, dolorem odit rerum voluptatem quas nam.</p>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="https://content3.jdmagicbox.com/comp/jabalpur/j3/9999px761.x761.211220192745.k5j3/catalogue/the-luxurious-cafe-lounge-and-restaurant-gole-bazar-jabalpur-restaurants-ywstwm6a48.jpg" alt=""/>
                <div className="content">
                    <h3>Amazing places</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Expedita, dolorem odit rerum voluptatem quas nam.</p>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="https://imgmedia.lbb.in/media/2020/01/5e25db49e9e435d54062dff7_1579539273775.jpg" alt=""/>
                <div className="content">
                    <h3>Amazing places</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Expedita, dolorem odit rerum voluptatem quas nam.</p>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>
            </div>
       </div>

     
     {/* gallery section end */}


      {/* Blog section start  */}

     <div className="blog" >
        <h1 class="heading">
            <span>b</span>
            <span>l</span>
            <span>o</span>
            <span>g</span>
            <span>s</span>
            
       </h1>

               <div class="slider">
                    <div class="box">
                        <img src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" alt=""/>
                        <h3>John wick</h3>
                        <p>"Indulge in culinary excellence at 'Gastronomique Haven' - a renowned restaurant where artistry meets flavor.
                         From avant-garde appetizers to decadent desserts, each dish is 
                         a masterpiece. Immerse yourself in an unforgettable dining experience
                          that tantalizes taste buds and celebrates gastronomy's finest. 
                          A symphony of taste awaits at every visit."</p>
                         
                    </div>
               
                <div class="box">
                    <img src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" alt=""/>
                    <h3>David green</h3>
                    <p>"Welcome to 'Savory Elegance' - a legendary dining destination that has enchanted palates for decades. Our expertly curated menu marries innovation 
                    with tradition, delivering an exquisite journey of taste. Impeccable service and a refined ambiance complete the experience, making every visit a celebration of culinary passion and excellence."</p>
                     
                   </div>
                
                    <div class="box">
                        <img src="https://st3.depositphotos.com/1037987/15097/i/450/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg" alt=""/>
                        <h3>amy gill</h3>
                        <p>"Step into the world of 'Flavors Enigma' - a culinary sanctuary where each dish tells a captivating story. With locally sourced ingredients and a touch of global 
                        inspiration, every plate is a work of art. Our restaurant's legacy of taste, texture, and creativity invites you to savor the mysteries of gastronomy in every delectable bite."</p>
                       
                       </div>

                    <div class="box">
                        <img src="https://www.livemint.com/lm-img/img/2023/04/04/600x338/Mukesh_Ambani_1680622269421_1680622269703_1680622269703.jpg" alt=""/>
                        <h3>Mr. Mukesh Ambani sir</h3>
                        <p>"Discover 'Epicurean Reverie' - a haven for discerning food enthusiasts. Our iconic restaurant redefines luxury dining through harmonious fusions of taste and aesthetics. From the first bite to the last, embark on a gastronomic journey that transcends boundaries, elevating flavors to a level of pure enchantment. 
                        A symphony of senses awaits, where culinary dreams come true."</p>
                         
                       </div>
            </div>
        </div>
     
    
     {/* review section end  */}


     
     {/* Contact section starts  */}
     
     <div className="contact" >
            
        <h1 className="heading">
             <span>c</span>
             <span>o</span>
             <span>n</span>
             <span>t</span>
             <span>a</span>
             <span>c</span>
             <span>t</span>
        </h1>
 
        <div className="row">
                
              
 
               <form action="">
                    <div className="inputBox">
                       <input type="text" placeholder="name please"/>
                       <input type="email" placeholder="email please"/>
                    </div>
 
                    <div className="inputBox">
                     <input type="number" placeholder="number please"/>
                     <input type="text" placeholder="subject"/>
                    </div>
 
                  <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
                  <input type="submit" className="btn" value="send message"/>
               </form>
        </div>
     </div>
    
     {/* <!-- Contact section ends here --> */}


     {/* footer section starts */}

       <div className="footer">
          <div className="box-container">
                  <div className="box">
                    <h3>About us</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     At commodi deserunt repudiandae saepe quaerat voluptates 
                     aspernatur laboriosam.</p>
                  </div>

                  <div className="box">
                    <h3>branch locations</h3>
                    <a href="#">India</a>
                    <a href="#">Usa</a>
                    <a href="#">Japan</a>
                    <a href="#">Turkey</a>
                  </div>

                  <div className="box">
                    <h3>quick links</h3>
                    <a href="#">home</a>
                    <a href="#">book</a>
                    <a href="#">packages</a>
                    <a href="#">services</a>
                    <a href="#">gallery</a>
                    <a href="#">review</a>
                    <a href="#">contact</a>
                  </div>

                  <div className="box">
                    <h3>follow us</h3>
                    <a href="#">facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">twitter</a>
                    <a href="#">linkedin</a>  
                  </div>
          </div>
        </div>
        <h1 className="credit">created by<span> web designer</span> | all rights reserved!</h1>
     

    {/* footer section ends */}



    </div>
   
  )
}

export default HomeScreen