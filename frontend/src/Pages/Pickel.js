import React from 'react'
import pickel_banner from '../Images/Assests/pickle_8db05ab3-45c7-4448-9791-4705aa2416dd.webp'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Pickelproducts from '../Constant/Pickelproducts'
import Card from '../Constant/Card'





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

<Card data={Pickelproducts}/>


<Footer/>


  
 </>
 )
 }
  


export default Pickel