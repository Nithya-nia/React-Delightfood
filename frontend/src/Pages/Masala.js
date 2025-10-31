import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Masalaproducts from '../Constant/Masalaproducts'
import masala_banner from '../Images/Assests/Masala_108c630a-bb43-46c5-8696-2d7fb8c60706.webp'
import Card from '../Constant/Card'

const Masala = () => {
  return (
    <>
     <Navbar/>
    <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={masala_banner} class="d-block w-100" alt="..."/>
      
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

    
    <Card data={Masalaproducts}/>


    <Footer/>
    </>         
)
}
export default Masala