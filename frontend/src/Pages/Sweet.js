import React from 'react'
import sweet_css from '../Pages/Sweet.css'
import new_sweet from '../Images/Assests/New_Sweet.webp'
import palm_condy from '../Images/Assests/palmcondylifestyle.jpg'
import modakor from '../Images/Assests/Recreate-Modakor-Gur-Besan-Laddu-Combos-all-Design-for-Delightfood0-6_bf94d2f9-bdbb-4044-a3b7-8da53f19fc09 (1).webp'
import kaju_katli from '../Images/Assests/Kaju-Katli-250g-liestyle-1.webp'
import khush from '../Images/Assests/Khush-Angoori-Petha-350g-Lifestyle-1.webp'
import sugar_free from '../Images/Assests/Sugar-free-Angoori-Petha-350g-lifestyle-1.webp'
import burfi from '../Images/Assests/Dodha-Burfi-500g_Lifestyle-1.webp'
import moti from '../Images/Assests/MOTI_CHOOR_LADOO_400g.jpg'
import jodhapuri from '../Images/Assests/Jodhpuri_Ladoo_400g.jpg'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'




const Sweet = () => {
  return (
    <>
    <Navbar/>

     <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={new_sweet} class="d-block w-100" alt="..."/>
      
    </div>
    </div>



    <div class="sorting pt-3 ">
    <i class="fa-solid fa-arrow-down-wide-short"></i>Sort by
  </div>
  <div class="dropdown pt-3 ms-2">
  <button class="btn  dropdown-toggle sort" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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



<section class="section-4 ">
  <div class="container mt-5">
    
    <div class="card-group">
      <div class="row row-cols-2 row-cols-md-4 g-4">
      <div class="col ">
  <div class="card border-0 ">
    <img src={palm_condy} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">palm Candy Tal Mishri-350gram</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.299.00 </p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  </div>
   <div class="col">
  <div class="card border-0">
     <img src={modakor} class="card-img-top" alt="..."/>
    <div class="card-body  text-center">
       <h5 class="card-title">Chocolate Modak 250g</h5>
       <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.259.00 <del><small class="text-muted ">Rs.267.00</small></del></p>
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
    <img src={kaju_katli} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Kaju katli</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.399.00 <del><small class="text-muted ">Rs.490.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  </div>

   <div class="col">
   <div class="card border-0">
    <img src={khush} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Khus Angoori petha 350g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.254.00 <del><small class="text-muted ">Rs.254.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  </div>


  

   <div class="col">
  <div class="card border-0 ">
    <img src={sugar_free} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Sugar free Angoori Petha 350gram</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.499.00  <del><small class="text-muted ">Rs.599.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
  </div>

   <div class="col">
  <div class="card border-0">
     <img src={burfi} class="card-img-top" alt="..."/>
    <div class="card-body  text-center">
       <h5 class="card-title">Dodha Barfi</h5>
       <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.299.00 <del><small class="text-muted ">Rs.315.00</small></del></p>
    
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
          </div>
    </div>

  </div>

   <div class="col">
  <div class="card border-0">
    <img src={moti} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Moti Choor Ladoo 400g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.399.00 <del><small class="text-muted ">Rs.440.00</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            Add to Cart
          </button>
    </div>
  </div>
   </div>

    <div class="col">
   <div class="card border-0">
    <img src={jodhapuri} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">Jodhapuri Ladoo 400g</h5>
        <p><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i><i class="fa-solid fa-star text-success"></i>1 review</p>
      <p class="card-text text-danger">RS.498.00 <del><small class="text-muted ">Rs.499.00</small></del></p>
      
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

export default Sweet