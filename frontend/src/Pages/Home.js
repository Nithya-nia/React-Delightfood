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
import kesar from '../Images/Assests/Dry-Kesar-Petha-350g-lifestyle.jpg-1.webp'
import calcutta from '../Images/Assests/Calcutta-Meetha-Paan-300gm-Lifestyle-1.webp'
import petha from '../Images/Assests/Dry-Petha-350g-lifestyle.jpg1.jpeg'
import banarasi from '../Images/Assests/Banarasi-Meetha-Paan-200gm-lifestyle-2.webp'
import bk from '../Images/Assests/Beetroot-kanji-250ml.webp'
import rk from '../Images/Assests/Radish-Kanji250ml_392478af-7409-4c5a-bed6-bf26f6a5e405.webp'
import ss from '../Images/Assests/smoked-salt100g.webp'
import gcl from '../Images/Assests/Green-chilli-lemon-salt.webp'
import bikaneri from '../Images/Assests/Bikaneri-Bhujia-300gm-Pouch-Lifestyle.webp'
import banana from '../Images/Assests/Nandran-Banan-Chips-200g-lifetyle.jpg-1.webp'
import murukku from '../Images/Assests/Butter-Murukku-200g-Lifestyle.jpg-1.webp'
import mix from '../Images/Assests/Green-chilli-lemon-salt.webp'
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


const Home = () => {
  return (
    <>
    <Navbar/>
   <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators md-12">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="btn_carousel active" aria-current="true" aria-label="Slide 1"></button>
    <button className="btn_carousel " type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button className="btn_carousel " type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button className="btn_carousel " type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>

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
<div className=" container row row-cols-3 row-cols-md-6 ms-3">
  
  <div className="col d-flex gap-1 pt-4 ">
    <div className="card h-100 card_style" >
      <img src={sweets} className="card-img-top-1 style" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sweets</h5>
        
      </div>
    </div>
  </div>
  <div className="col d-flex gap-3 pt-4">
    <div className="card h-100 card_style ">
      <img src={snacks} className="card-img-top-1 style" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Snacks</h5>
       
      </div>
    </div>
  </div>
  <div className="col d-flex gap-2 pt-4">
    <div className="card h-100 card_style">
      <img src={masala}  className="card-img-top-1 style" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Masala</h5>
       
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
   <div className="col d-flex gap-3 pt-4">
    <div className="card h-100 card_style">
      <img src={mukhwas}  className="card-img-top-1 style" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mukhwas</h5>
        
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
  <div class="container">
    <div class="card-group">
  <div class="card border-0 ">
    <img src={kesar}class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Kesar Dry petha 350g</h5>
      <p class="card-text text-danger">RS.249.00 <del><small class="text-muted ">Rs.260.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2" >
            Add to Cart
          </button>
    </div>
  </div>
  <div class="card border-0">
     <img src={calcutta} class="card-img-top" alt="..."/>
    <div class="card-body  text-center">
       <h5 class="card-title">Calcutta Meetha paan</h5>
       <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.229.00 <del><small class="text-muted ">Rs.280.00</small></del></p>
      <div class="text-center">
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
          </div>
    </div>

  </div>
  <div class="card border-0">
    <img src={petha} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Dry Petha 350g</h5>
      <p class="card-text text-danger">RS.215.00 <del><small class="text-muted ">Rs.220.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2" >
            Add to Cart
          </button>
    </div>
  </div>
   <div class="card border-0">
    <img src={banarasi} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Banarasi Meetha paan</h5>
      <p class="card-text text-danger">RS.229.00 <del><small class="text-muted ">Rs.340.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
</div>
  </div>
  <div class="text-center">
  <button type="submit" class="add-to-cart-btn m-3">
            View all
          </button>
          </div>
</section>



<section class="section-4 ">
  <h3 class="text-center pt-2 mt-3">NEW ARRIVALS</h3>
  <div class="container">
    <div class="card-group">
  <div class="card border-0 ">
    <img src={bk} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Beetroot Kanji (250ml)</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.98.00 <del><small class="text-muted ">Rs.99.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  <div class="card border-0">
     <img src={rk} class="card-img-top" alt="..."/>
    <div class="card-body  text-center">
       <h5 class="card-title">Radish Kanji (250ml) </h5>
       <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.98.00 <del><small class="text-muted ">Rs.99.00</small></del></p>
      <div class="text-center">
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
          </div>
    </div>

  </div>
  <div class="card border-0">
    <img src={ss} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Smoked salt</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.98.00 <del><small class="text-muted ">Rs.99.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
   <div class="card border-0">
    <img src={gcl} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Green Chilli Lemon -salt</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.98.00 <del><small class="text-muted ">Rs.99.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
</div>
  </div>
  <div class="text-center">
  <button type="submit" class="add-to-cart-btn p-2 ">
            View all
          </button>
          </div>
</section>




<section class="section-4 ">
  <h3 class="text-center pt-2 mt-3">DAILY SNACKS</h3>
  <div class="container">
    <div class="card-group">
  <div class="card border-0 ">
    <img src={bikaneri} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Bikaneri Bhujia 300g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.299.00 <del><small class="text-muted ">Rs.300.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  <div class="card border-0">
     <img src={banana} class="card-img-top" alt="..."/>
    <div class="card-body  text-center">
       <h5 class="card-title">Nendran Banana Chips</h5>
       <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.299.00 <del><small class="text-muted ">Rs.235.00</small></del></p>
      <div class="text-center">
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
          </div>
    </div>

  </div>
  <div class="card border-0">
    <img src={murukku} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Butter Murukku</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.189.00 <del><small class="text-muted ">Rs.200.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
   <div class="card border-0">
    <img src={mix} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Masala Nut Mix 200g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.179.00 <del><small class="text-muted ">Rs.199.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
</div>
  </div>
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
      <img class=" rounded" src={metha_pan} height="400px" weight="400px"/>
    </div>
    <div class="col mt-3 ms-2">
      <img  class=" rounded" src={sambar} height="400px" weight="400px"/>

    </div>
    <div class="col mt-3 ms-2">
      <img class=" rounded" src={tomato_thokku} height="400px" weight="400px"/>
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