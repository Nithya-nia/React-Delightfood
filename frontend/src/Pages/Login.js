import React from 'react'
import Login_css from './Login.css'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Login = () => {
  return (
<>
<div id="Login-section">
<Navbar/>
   <div class="container-fluid  ">
      <div class=" row">
    <div class="col ">
        <h2 class="pt-5 mb-4 text-center">Login</h2>
    </div>
    <div>
    <form class="d-flex flex-column align-items-lg-center align-items-sm-center">
      
  <div class=" col mb-2 ">
    <label for="exampleInputEmail1" class="form-label">Email *</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"/>
  </div>
  <div class=" col mb-4 ">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control input-lg" placeholder="password" id="example"/>
  </div>
 <div class="col">
  <button type="submit" class="btn ">Sign In</button>
</div>
</form>
</div>



  <div class="d-flex flex-column align-items-center  ">
  
  <a href="#" class="text-dark credential"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="50" fill="currentColor" class="bi bi-key text-dark" viewBox="0 0 16 16">
  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>Forget Your Password ?</a>
<a  href="#"  class="text-dark credential"><i class="fa-solid fa-user-plus"></i>Create Account</a>
<a href="#"  class="text-dark credential pt-2"><i class="fa-solid fa-box-open"></i>Return to store</a>
</div>
</div>
</div>
<Footer/>
</div>
</>

  )
}

export default Login