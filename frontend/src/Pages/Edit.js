import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';


const Snackedit = () => {
  
    const{id}=useParams();

    const [productsItems,setproductsItems]=useState ({})

    useEffect(()=>{
     fetch(`http://localhost:6001/getsingleproduct/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))
      },[])

    const handleUpdate=(event)=>{
    event.preventDefault();
       const form=event.target;

        const title=form.title.value;
        const img=form.img.value;
        const price=form.price.value;
        const rating=form.starrating.value;
        const quantity=1
    const foods={title,img,rating,price,quantity};

    fetch(`http://localhost:6001/editsingleproduct/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(foods),
        })
        .then((res)=>res.json())
        .then((data)=>{
        toast.warn("successfully updated");
        window.location.href="/getproducts";
        })
    } 
 
 return (
    <div>
      <ToastContainer />
    <div class="card update6">
    <div class="card-body update5">
    <form class="justify-content-center" onSubmit={handleUpdate} >
            <h1 class="text-center">Edit</h1>
            <div class="d-flex flex-column align-items-lg-center ms-3">
            <div class="upload0 mt-5">
                <label ><b class=""> Product Title </b></label><br/>
                <input type="text" name="title" defaultValue={productsItems.title} className='upload0_css form-control'/>
            </div>

            <div class="upload1 mt-3">
                <label ><b class="">Image Address</b></label><br/>
                <input type='img' name="img" defaultValue={productsItems.img} className='upload1_css form-control'/>
            </div>
              
            <div class="upload2 mt-3">
                <label ><b>Product Price</b></label><br/>
                <input type='number' name='price' defaultValue={productsItems.price} className='upload2_css form-control'/>
            </div>

            <div class="upload3 mt-3">
                <label ><b>Rating</b></label><br/>
                <input type='number' name='starrating'defaultValue={productsItems.rating} className='upload3_css form-control'/><br/>
            </div>
            {/* <div class="upload4 mt-3">
                <label ><b>Gender</b></label><br/>
              
                    <label><b>Male</b></label>
                   <input type='radio' name='gender' value="Male" className='upload3_css '/><br/>
                    <label><b>Female</b></label>
                   <input type='radio' name='gender' value="Female" className='upload3_css '/><br/>
            </div>
            <div class="upload5">
                 <label ><b>car</b></label><br/>
              
                <label><b>benz</b></label>      
                   <input type='checkbox' name='check'  value="benz" className='upload3_css '/><br/>
                    <label><b>volvo</b></label>
                   <input type='checkbox' name='check' value="volvo" className='upload3_css '/><br/>
            </div> */}

            
                

            <div class="upload4">
                <button type="submit" class="btn btn-primary">upload</button>
                
            </div>
</div>
        </form>
   </div>
   </div>
   </div>
  )
}


export default Snackedit

