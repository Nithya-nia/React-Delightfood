import React from 'react'
import home_css from './Home.css'
import banner1 from '../Images/Assests/gift_banner_1.jpg'
import banner2 from '../Images/Assests/main-banner2.webp'
import banner3 from '../Images/Assests/rice_banner_big_size.jpg'
import banner4 from '../Images/Assests/website_banner-4_350d66bd-744f-4961-b8eb-8076baea30d8.jpg'
import sweets from '../Images/Assests/sweets_1_1024x1024.png'
import snacks from '../Images/Assests/snacks_1_3754717e-5cfa-4bf8-bc8f-96dbd1e0907f_1024x1024.png'
import masala from '../Images/Assests/spices_1_1024x1024.png'
import pickel from '../Images/Assests/pickles_1_1024x1024.png'
import mukhwas from '../Images/Assests/mukhwas_2_1024x1024.png'
import rice from '../Images/Assests/rice_1_1024x1024.png'
import amazon from '../Images/Assests/AMAZON-1.webp'
import flipkart from '../Images/Assests/flipkart.webp'
import swiggy from '../Images/Assests/swiggy.webp'
import instamart from '../Images/Assests/instamart-logo.webp'
import bigbasket from '../Images/Assests/bigbasket.webp'
import blinkit from '../Images/Assests/blinkit.webp'
import mouthfreshners from '../Images/Assests/8f1c421b6257a53c143c47fae14d6654.jpg'
import pickel_poster from '../Images/Assests/pickels.jpg'
import image_3 from '../Images/Assests/81_dDZFnB4L._SL1500.jpg'
import khichadi from '../Images/Assests/khichdi.jpg'
import masala_7 from '../Images/Assests/masalas_2.jpg'
import drink from '../Images/Assests/drink_1.jpg'
import metha_pan from '../Images/Assests/calcutta_metha_paan.webp'
import sambar from '../Images/Assests/iyenagar_sambar_masala.webp'
import tomato_thokku from '../Images/Assests/iyenagar_sambar_masala.webp'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../Constant/Card.js'
import Homeproducts from '../Constant/Homeproducts.js'
import Newarrival from '../Constant/Newarrival.js'
import Dailysnack from '../Constant/Dailysnack.js'



const Home = () => {
  
  return (
    <>
    <Navbar/>
   <div id="carouselExampleLight" className="carousel carousel-Dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators md-12">
    <button type="button" data-bs-target="#carouselExampledark" data-bs-slide-to="0" className="button-carousel active" aria-current="true" aria-label="Slide 1"></button>
    <button className="button-carousel" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button className="button-carousel" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button className="button-carousel" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={banner1} className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={banner2} className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..."/>
      
    </div>
   <div className="carousel-item">
      <img src={banner4}className="d-block w-100" alt="..."/>
      
    </div>
  </div>
  <button className="carousel-control-prev d-none d-lg-block btn_previous" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next d-none d-lg-block btn_next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<section>
  <div class="container">
     <h3 className="categories">CATEGORIES</h3>
<div className=" container row row-cols-3 row-cols-md-6 ms-2">
  
  <div className="col d-flex gap-4 pt-4 ">
    <div className="card h-100 card_style" >
      <img src={sweets} className="card-img-top-1 style" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sweets</h5>
        
      </div>
    </div>
  </div>
  <div className="col d-flex gap-1 pt-4">
    <div className="card h-100 card_style ">
      <img src={snacks} className="card-img-top-1 style" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Snacks</h5>
       
      </div>
    </div>
  </div>
  <div className="col d-flex gap-1 pt-4">
    <div className="card h-100 card_style">
      <img src={masala}  className="card-img-top-1 style" alt="..."/>
      <div className="card-body">
        <h5 className="card-title masala_cat">Masala</h5>
       
      </div>
    </div>
  </div>
  <div className="col d-flex gap-2 pt-4">
    <div className="card h-100 card_style">
      <img src={pickel} className="card-img-top-1 style" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pickle</h5>
       
      </div>
    </div>
  </div>
   <div className="col d-flex gap-5 pt-4">
    <div className="card h-100 card_style">
      <img src={mukhwas}  className="card-img-top-1 style" alt="..."/>
      <div className="card-body">
        <h5 className="card-title mukhwas">Mukhwas</h5>
        
      </div>
    </div>
  </div>
   <div className="col d-flex gap-3 pt-4">
    <div className="card h-100 card_style">
      <img src={rice}  className="card-img-top-1 style" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Rice</h5>
        
      </div>
    </div>
  </div>
</div>
</div>
</section>


<section class="section-3 ">
  <h3 class="text-center pt-2 mt-2">MOST LOVED PRODUCTS</h3>
   <Card data={Homeproducts}/>
  
 
  <div class="text-center">
  <button type="submit" class="add-to-cart-btn m-3">
            View all
          </button>
          </div>
</section>



<section class="section-4 ">
  <h3 class="text-center pt-2 mt-3">NEW ARRIVALS</h3>
  <Card data={Newarrival}/>
 
  <div class="text-center">
  <button type="submit" class="add-to-cart-btn p-2 ">
            View all
          </button>
          </div>
</section>




<section class="section-4 ">
  <h3 class="text-center pt-2 mt-3">DAILY SNACKS</h3>
  <Card data={Dailysnack}/>
 
  <div class="text-center">
  <button type="submit" class="add-to-cart-btn p-2 ">
            View all
          </button>
          </div>
</section>



<section class="section-6">
   <div class="container">
     <h3 class="categories">We are also available on</h3>
<div class="row row-cols-3 row-cols-md-6 ms-5">
  <div class="col d-flex   pt-4">
    <div class="card h-100 card_style">
      <img src={amazon} class="card-img-top img_6" alt="..."/>
      
        
      </div>
      </div>
    
  <div class="col d-flex  pt-4">
    <div class="card h-100 card_style" >
      <img src={flipkart}  class="card-img-top img_6" alt="..."/>
      
       
      </div>
    </div>
  <div class="col d-flex  pt-4">
    <div class="card h-100 card_style">
      <img src={swiggy}  class="card-img-top img_6" alt="..."/>
      
       
      </div>
    </div>
  <div class="col d-flex pt-4">
    <div class="card h-100 card_style">
      <img src={instamart} class="card-img-top img_6" alt="..."/>
      
       
      </div>
    </div>
  
   <div class="col d-flex  pt-4">
    <div class="card h-100 card_style">
      <img src={bigbasket}  class="card-img-top img_6" alt="..."/>
      
        
      </div>
    </div>

   <div class="col d-flex  pt-4">
    <div class="card h-100 card_style"> 
      <img src={blinkit} class="card-img-top img_6" alt="..."/>
      
        
      </div>
    </div>
  </div>
  </div>
</section>



<div class="container">
<h4 class="categories">OUR COLLECTIONS</h4>
  <div class="row row-cols-1 row-cols-md-3 mt-4">
    <div class="col ">
<div class="card text">
  <img src={mouthfreshners} class="card-img" alt="..." height="400px" width="400px"/>
  <div class="card-img-overlay text-light d-flex flex-column justify-content-center align-items-center">
    <h5 class="card-title text-light ">Mouth Freshner</h5>
    <button class="shop-now add-to-cart-btn">Shop now</button>
  </div>
</div>
</div>


<div class="col">
<div class="card text">
  <img src={pickel_poster} class="card-img" alt="..." height="400px" width="400px"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
    <h5 class="card-title text-light ">Pickles</h5>
    <button class=" shop-now add-to-cart-btn">Shop now</button>
  </div>
</div>
</div>

<div class="col">
<div class="card text">
  <img src={image_3} class="card-img" alt="..." height="400px" width="400px"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
    <h5 class="card-title text-light text-light d-flex flex-column justify-content-center align-items-center">Bakkery</h5>
    <button class="shop-now add-to-cart-btn">Shop now</button>
  </div>
</div>
</div>


<div class="col">

<div class="card text">
  <img src={khichadi} class="card-img" alt="..." height="400px" width="400px"/>
  <div class="card-img-overlay text-light d-flex flex-column justify-content-center align-items-center">
    <h5 class="card-title ">Ready to cook</h5>
    <button class="shop-now add-to-cart-btn">Shop now</button>
  </div>
</div>
</div>

<div class="col">
<div class="card text">
  <img src={masala_7} class="card-img" alt="..." height="400px" width="400px"/>
  <div class="card-img-overlay text-light d-flex flex-column justify-content-center align-items-center">
    <h5 class="card-title ">Masalas</h5>
    <button class="shop-now add-to-cart-btn">Shop now</button>
  </div>
</div>
</div>

<div class="col">
<div class="card text">
  <img src={drink} class="card-img" alt="..." height="400px" width="400px"/>
  <div class="card-img-overlay text-light d-flex flex-column justify-content-center align-items-center">
    <h5 class="card-title ">Sharbats</h5>
    <button class="shop-now add-to-cart-btn">Shop now</button>
  </div>
</div>
</div>
</div>
</div>


<div class="container">
  <h4 class="categories">TRENDING BLOGS</h4>
  <div class="row">
    <div class="col mt-3  ms-2">
      <img src={metha_pan} height="400px" width="350px"/>
    </div>
    <div class="col mt-3 ms-2">
      <img src={sambar} height="400px" width="350px"/>

    </div>
    <div class="col mt-3 ms-2">
      <img src={tomato_thokku} height="400px" width="350px"/>
    </div>
  </div>


 <div class="text-center">
  <button type="submit" class="add-to-cart-btn m-3 ">
            View all
          </button>
          </div>

</div>


  







<Footer/>





</>
  )
}

export default Home