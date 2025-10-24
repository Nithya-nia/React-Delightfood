

import React from 'react'
import snacks_css from '../Pages/Snacks.css'
import banner_snacks from '../Images/Assests/snackjpg.webp'
import cocktail from '../Images/Assests/Cocktail-Masala-Nut-Mix-300g-Lifestyle-1.webp'
import soya from '../Images/Assests/Soya_Stick_200gm_Pouch_Lifestyle1.webp'
import cocktail_masala from '../Images/Assests/Cocktail-Masala-Nut-Mix-300g-Lifestyle-1.webp'
import masala_nut from '../Images/Assests/Masala-Nut-Mix-200g-Lifestyle-Images-1.webp'
import rago_masala from '../Images/Assests/Rago-Masala-Mixture-250gm-Lifestyle-1.webp'
import success from '../Images/Assests/51fN5DTNI3L.webp'
import pepper_banana from '../Images/Assests/Pepper-Banana-Chips-350gm-Lifestyle-1.webp'
import masala_murukku from '../Images/Assests/Masala-Murukku-200g-Lifetyle-Images-1.webp'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'






   

const Snacks = () => {
  return (
    <>
    <Navbar/>
    <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={banner_snacks} class="d-block w-100" alt="..."/>
      
    </div>
    </div>


<div class="sorting pt-3 ">
    <i class="fa-solid fa-arrow-down-wide-short"></i>Sort by
  </div>
  <div class="dropdown pt-3 ms-2">
  <button class="btn  dropdown-toggle sort" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
    Featured
  </button>
  <ul class="dropdown-menu sort_menu" >
    <li><a class="dropdown-item" href="#">Featured</a></li>
    <li><a class="dropdown-item" href="#">Best Selling</a></li>
    <li><a class="dropdown-item" href="#">Alphabetically,A-Z</a></li>
    <li><a class="dropdown-item" href="#">Alphabetically,Z-A</a></li>
    <li><a class="dropdown-item" href="#">price,low to high</a></li>
    <li><a class="dropdown-item" href="#">Price,high to low</a></li>
    <li><a class="dropdown-item" href="#">Date,old to new</a></li>
    <li><a class="dropdown-item" href="#">Date,new to old</a></li>
    
  </ul>
</div>


<section class="section-4 ">
  <div class="container mt-5">
    
    <div class="card-group">
      <div class="row row-cols-2 row-cols-md-4 g-2">
      <div class="col">
  <div class="card border-0 ">
    <img src={cocktail} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Cuttack Mixture 200g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.179.00  <del><small class="text-muted ">Rs.180.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>//
  </div>
   <div class="col">
  <div class="card border-0">
     <img src={soya} class="card-img-top" alt="..."/>
    <div class="card-body  text-center">
       <h5 class="card-title">Diet Soya Sticks</h5>
       <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.199.00 </p>
      <div class="text-center">
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
          </div>
    </div>
    </div>
  </div>
   <div class="col">
  <div class="card border-0">
    <img src={cocktail_masala} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Cocktail Masala Nut Mix-300g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.255.00 <del><small class="text-muted ">Rs.299.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  </div>

   <div class="col">
   <div class="card border-0">
    <img src={masala_nut} class="card-img-top" alt="..."/>
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


  

   <div class="col">
  <div class="card border-0 ">
    <img src={rago_masala} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Rago Masala Mixture 250g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.169.00  <del><small class="text-muted ">Rs.199.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  </div>

   <div class="col">
  <div class="card border-0">
     <img src={success} class="card-img-top" alt="..."/>
    <div class="card-body  text-center">
       <h5 class="card-title">Rice Kodubale</h5>
       <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.249.00 </p>
    
      <button type="submit" class="add-to-cart-btn p-2 ">
            Add to Cart
          </button>
          </div>
    </div>

  </div>

   <div class="col">
  <div class="card border-0">
    <img src={pepper_banana} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Pepper Banana Chips</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.249.00 </p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
   </div>

    <div class="col">
   <div class="card border-0">
    <img src={masala_murukku} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">masala muruku</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.249.00 <del><small class="text-muted ">Rs.299.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
</div>
</div>
</div>
</div>
  
</section>
<Footer/>

  </>
  )
}

export default Snacks