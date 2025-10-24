import React from 'react'
import pickel_banner from '../Images/Assests/pickle_8db05ab3-45c7-4448-9791-4705aa2416dd.webp'
import tomato from '../Images/Assests/tomato_thokku.webp'
import kolambu from '../Images/Assests/vathakozhambu_thokku_2_bf44466b-99a7-4282-977b-2d0472cdb8a3.webp'
import mango from '../Images/Assests/vathakozhambu_thokku_2_bf44466b-99a7-4282-977b-2d0472cdb8a3.webp'
import tn from '../Images/Assests/tnm022_1.webp'
import tnm from '../Images/Assests/tnm005_cp-3_1.webp'
import tnmo from '../Images/Assests/tnm025-2_2.webp'
import amla from '../Images/Assests/rajasthani-amla-murabba-product-images-orvcewcl8us-p591505772-0-202205220205.webp'
import kothamalli from '../Images/Assests/tnm023_1.webp'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'





const Pickel = () => {
  return (
    <>
    <Navbar/>
    <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={pickel_banner} class="d-block w-100" alt="..."/>
      
    </div>
    </div>

    <div class="container text-end">
  <div class="sorting pt-3 ">
    <i class="fa-solid fa-arrow-down-wide-short"></i>Sort by
  </div>
  <div class="dropdown pt-3 ms-2">
  <button class="btn  dropdown-toggle sort" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
    Featured
  </button>
  <ul class="dropdown-menu sort_menu">
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
</div>


<section class="section-4 ">
  <div class="container mt-5">
    
    <div class="card-group">
      <div class="row row-cols-2 row-cols-md-4 g-4">
      <div class="col ">
  <div class="card border-0 ">
    <img src={tomato} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Mylapore Iyer's Tomato Thokku</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.499.00 <del><small class="text-muted ">Rs.450.00</small></del> </p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  </div>
   <div class="col">
  <div class="card border-0">
     <img src={kolambu} class="card-img-top" alt="..."/>
    <div class="card-body  text-center">
       <h5 class="card-title">Mylapore Iyer's Vathakozhambu Thokku</h5>
       <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.449.00 <del><small class="text-muted ">Rs.450.00</small></del></p>
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
    <img src={mango} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Mango Thokku</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.449.00 <del><small class="text-muted ">Rs.450.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  </div>

   <div class="col">
   <div class="card border-0">
    <img src={tn} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Brinjal Thokku 500g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.647.00 <del><small class="text-muted ">Rs.677.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2" >
            Add to Cart
          </button>
    </div>
  </div>
  </div>


  

   <div class="col">
  <div class="card border-0 ">
    <img src={tnm} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Bharwan Lal Mirch Achaar 350g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.250.00  <del><small class="text-muted ">Rs.299.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  </div>

   <div class="col">
  <div class="card border-0">
     <img src={tnmo} class="card-img-top" alt="..."/>
    <div class="card-body  text-center">
       <h5 class="card-title">Pavakkai Thokku 500g</h5>
       <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.573.00 <del><small class="text-muted ">Rs.603.00</small></del></p>
    
      <button type="submit" class="add-to-cart-btn p-2 ">
            Add to Cart
          </button>
          </div>
    </div>

  </div>

   <div class="col">
  <div class="card border-0">
    <img src={amla} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Amla Murabba 350g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.299.00 <del><small class="text-muted ">Rs.349.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
   </div>

    <div class="col">
   <div class="card border-0">
    <img src={kothamalli} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Kothamalli Thokku 500g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.585.00 <del><small class="text-muted ">Rs.600.00</small></del></p>
      
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

export default Pickel