import React from 'react'
import Signup_css from './Signup'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Signup = () => {
  return (
    <>
    <Navbar/>
     <div class="container  ">
      <div class="  d-flex flex-column">
    <div>
        <h2 class="pt-5 mb-4 text-center">Create Account</h2>
    </div>

    <form class="d-flex flex-column align-items-lg-center align-items-sm-center">
        <div class="mb-2 ">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="First Name" aria-describedby="emailHelp" />
   
  </div>
  <div class="mb-2 ">
    <label for="exampleInputEmail1" class="form-label">Last Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Last Name" aria-describedby="emailHelp" />
   
  </div>
  <div class="mb-2 ">
    <label for="exampleInputEmail1" class="form-label">Email *</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-4 ">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control input-lg" placeholder="password" id="example"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Email me with news and offers</label>
  </div>
 
  <button type="submit" class="btn ">Create</button>
  </form>
</div>
  <div class="  d-flex flex-column align-items-sm-center align-items-lg-center ">
  
  
<a  href="#"  class="text-dark credential pt-4"><i class="fa-solid fa-right-to-bracket"></i>Log In</a>
<a href="#"  class="text-dark credential pt-2"><i class="fa-solid fa-box-open"></i>Return to store</a>
</div>
</div>
<Footer/>
</>
  )
}

export default Signup