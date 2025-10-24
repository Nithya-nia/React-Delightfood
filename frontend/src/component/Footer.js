import React from 'react'
import css_footer from './Footer.css'
import img1 from '../Images/Assests/DF_logo.png'
import img2 from '../Images/Assests/Delightfood-Design-2_1_39355486-c5bd-4109-8960-4ba39b2389bd.avif'

const Footer = () => {
  return(
    <>
    <footer>
  <div>
<img className="w-100 pt-4" src={img2}/>
</div>
  <footer className=" container-full d-flex flex-row flex-column-lg justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-3 w-100 footer ">

    <div className="col mb-3 ">
     
      <img src={img1}/>
      <p className="pt-4">Delight Foods brings to you a collection of carefully selected foods from India. In our passionate search to offer food that is unique and full of flavor, we have ensured you get only the best and most authentic regional food products.</p>
      <hr className="d-block d-lg-none text-danger"/>
    </div>

    

    <div className="col mb-3 ms-3">
      <h5>Quick Links</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">About Us</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Contact</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Blogs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Privacy Policy</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Terms & Conditions</a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Cancellation or Returns</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Bulk Order Form</a></li>
      </ul>
      <hr className="d-block d-lg-none text-danger"/>
    </div>

    <div className="col mb-3 ms-3">
      <h5>Get In Touch</h5>
      <p>Customer care:+918861416154</p>
      <p>Email:support@delightfoods.com</p>
      <hr className="d-block d-lg-none text-danger"/>
    </div>

    <div className="col mb-3 ms-3">
      <h5>Lets's Connect</h5>
      <ul className="nav flex-row gap-1">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark"><i className="fa-brands fa-twitter"></i></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0  text-dark"><i className="fa-brands fa-facebook"></i></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark"><i className="fa-brands fa-pinterest"></i></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0  text-dark"><i className="fa-brands fa-instagram"></i></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0  text-dark"><i className="fa-brands fa-youtube"></i></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0  text-dark " ><i className="fa-brands fa-square-snapchat"></i></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0  text-dark"><i className="fa-brands fa-whatsapp"></i></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0  text-dark"><i className="fa-brands fa-linkedin"></i></a></li>
      </ul>
    </div>

  <hr className="text-danger w-100"/>
  
  
  </footer>
  </footer>
  

  <div>
      <p className="text-center copyrights" >Copyright &copy; 2025 Delight foods</p>
  </div>
  </>


  

  )
};

export default Footer