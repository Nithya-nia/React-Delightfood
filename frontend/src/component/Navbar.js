import React from 'react'
import css_navbar from './Navbar.css'
import img from "../Images/Assests/DF_logo.png"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
     <div id="index-section">
          
    <nav>
    <div className="navbar navbar-light  navbar-expand-lg">
      <div className="container d-flex flex-row ">
        <div className=" col-4-sm d-flex gap-2">
               <button  className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>

               <button className="nav-link d-block d-lg-none magnifying_glass"><i className="fa-solid fa-magnifying-glass"></i></button>
               </div>   
               <div className="col-4-sm ms-5">
              <a className="navbar-brand d-block" role="button" data-bs-toggle="navbar-brand" data-bs-target="#index-section" href="index.html"><img src={img} height="60px" width="60px"/></a></div>
             <div className="col-4-sm d-flex flex-row gap-2 ms-5">
              <a className="nav-link dropdown-toggle fw-bold d-block d-lg-none " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-regular fa-user"></i>
          </a>
          <ul className="dropdown-menu user"> 
           <li><a className="dropdown-item " href="#"/></li> <li><i className="fa-solid fa-arrow-right-to-bracket"></i>Log In</li>
           <li><a className="dropdown-item" href="#"/></li><li><i className="fa-solid fa-user-plus"></i>Create Account</li>
         </ul>

           <button className="nav-link d-block d-lg-none cart_shoping"><i className="fa-solid fa-cart-shopping "></i></button>
        
            </div>

            <div className="collapse navbar-collapse ms-5" id="navbarNav">
               
                <ul className= "navbar-nav pt-2 gap-3">
                   <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fw-bold" to="/sweets" role="button" data-bs-toggle="nav-link dropdown-toggle" data-bs-target="#sweet-section" aria-expanded="false">
            SWEETS
            </Link>
          <ul className="dropdown-menu">
     <li><a className="dropdown-item " href="#">JAGGERY SWEETS</a></li>
    <li><a className="dropdown-item" href="#">SUGAR FREE SWEETS</a></li>
    <li><a className="dropdown-item" href="#">LADDUS</a></li>
     <li><a className="dropdown-item" href="#">KAJU KATLIS</a></li>
      <li><a className="dropdown-item" href="#">REGIONAL PEDAS</a></li>
       <li><a className="dropdown-item" href="#">BARFIS</a></li>
        <li><a className="dropdown-item" href="#">AGRA SPECIAL PETHAS</a></li>
         <li><a className="dropdown-item" href="#">WINTER SWEETS</a></li>
          <li><a className="dropdown-item" href="#">HOLY SWEETS</a></li>
   </ul>
   </li>

   
       <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fw-bold" to="/Snacks" role="button" data-bs-toggle="nav-link dropdown-toggle" data-bs-target="#snacks-section" aria-expanded="false">
            SNACKS
          </Link>
          
          <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#">ROASTED SNACKS</a></li>
    <li><a className="dropdown-item" href="#">MURUKKUS</a></li>
    <li><a className="dropdown-item" href="#">BANANA CHIPS</a></li>
     <li><a className="dropdown-item" href="#">BHUJIAS</a></li>
      <li><a className="dropdown-item" href="#">NUT BASED SNACKS</a></li>
       <li><a className="dropdown-item" href="#">TRADITIONAL SAVOURIES</a></li>
      
    </ul>
    </li>
        
       <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fw-bold" to="/Pickel" role="button" data-bs-toggle="nav-link dropdown-toggle" data-bs-target="#pickels-section" aria-expanded="false">
            PICKLES
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">THOKKUS 10 TYPES</a></li>
    <li><a className="dropdown-item" href="#">RAJASTHANI PICKLE</a></li>
    <li><a className="dropdown-item" href="#">ANDHRA PICKLE</a></li>
     <li><a className="dropdown-item" href="#">PUNJABI PICKLE</a></li>
   </ul>
    
        </li>

    <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fw-bold" href="Masalas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MASALAS
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">PODIS 10 TYPES</a></li>
    <li><a className="dropdown-item" href="#">AMRITSARI MASALAS</a></li>
    <li><a className="dropdown-item" href="#">KARNATAKA MASALAS</a></li>
     <li><a className="dropdown-item" href="#">GROCERIES</a></li>
     
          </ul>
    
        </li>


         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MUKHWAS
          </a>
          <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#">DRY PAAN 10 TYPES</a></li>
    <li><a className="dropdown-item" href="#">DIGESTIVE CHURAN</a></li>
    <li><a className="dropdown-item" href="#">MOUTH FRESHENERS MUKHWAS</a></li>
    
       </ul>
        </li>


         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            REGIONAL RICE
          </a>
          <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#">BENGALI RICE</a></li>
    <li><a className="dropdown-item" href="#">ASSAM RICE</a></li>
    <li><a className="dropdown-item" href="#">KARNATAKA RICE</a></li>
     <li><a className="dropdown-item" href="#">MEGHALAYA RICE</a></li>
      <li><a className="dropdown-item" href="#">MANIPUR RICE</a></li>
       <li><a className="dropdown-item" href="#">KERELA RICE</a></li>
       </ul>
       </li>
        


         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            COOKIES
          </a>
          <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#">COOKIES</a></li>
    <li><a className="dropdown-item" href="#">RUSKS</a></li>
    <li><a className="dropdown-item" href="#">CHRISTMAS SPECIAL</a></li>
     <li><a className="dropdown-item" href="#">BIRTHDAY SPECIAL</a></li>
      <li><a className="dropdown-item" href="#">NANKHATAI</a></li>
       
        </ul>
        </li>
        </ul>
        </div>

         <div className="collapse navbar-collapse d-block-lg d-none"id="navbarNav">
          <div>
            <ul className="navbar-nav gap-4 ">
                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-regular fa-user"></i>
          </a>
          

          <ul className="dropdown-menu ">
           <li><Link className="dropdown-item " data-bs-toggle="dropdown-item" data-bs-target="#Login-section" to="/Login" role="button"><i className="fa-solid fa-arrow-right-to-bracket"></i>Log In</Link></li>
           <li><Link className="dropdown-item" data-bs-toggle="dropdown-item" data-bs-target="#create_account-section" to="/signup"><i className="fa-solid fa-user-plus"></i>Create Account</Link></li>
           </ul>
           </li>
           </ul>
           </div>
        
           <div className="d-flex gap-2 mt-2 ">
             <li className="nav-link"><button className="magnifying_glass"></button></li><i className="fa-solid fa-magnifying-glass"></i>
             <li className="nav-link"><button className="magnifying_glass"></button></li><i className="fa-solid fa-cart-shopping "></i>
                
      
            
        </div>
        </div>
          
</div>
</div>
        </nav>         
      </div> 
      </div>
  
    )
};

export default Navbar
