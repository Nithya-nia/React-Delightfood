import React from 'react'
import Upload_css from './Upload.css'
import { ToastContainer ,toast } from 'react-toastify';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
// import { useEffect } from 'react';

const Upload = () => {

    
    const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;
 
        const title=form.title.value;
        const img=form.img.value;
        const price=form.price.value;
        const rating=form.starrating.value;
        // const Gender=form.gender.value;
        // const checkbox=form.check;
        //  const check = [];
        // for (let i = 0; i < checkbox.length; i++) {
        //  if (checkbox[i].checked) {
        //          check.push(checkbox[i].value);
        //     }
        // }



    
        
       

        const quantity=1;

        if(title==="" || img==="" || price==="" || rating===""
            // check.length===0
        )
        {
            toast.warn('Fill All Required fields  ');
        }else{
            const foods={title,img,rating,price,quantity};
            // console.log(foods,"foods in object ");
            
            fetch('http://localhost:6001/uploadproduct',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(foods),
            })
            .then((data)=>{
                toast.success('added successfully');
                form.reset();
                window.location.href="/getproducts"
            }
            )

        }

        }

        return (
            
            <div>
                <Navbar/>
                <ToastContainer/>
              <div class="card upload6">
         <div class="card-body upload5">
        <form class="justify-content-center" onSubmit={handleSubmit} >
            <h1 class="text-center">Upload</h1>
            <div class="d-flex flex-column align-items-lg-center ms-3">
            <div class="upload0 mt-5">
                <label ><b class=""> Product Title </b></label><br/>
                <input type="text" name="title" className='upload0_css form-control'/>
            </div>

            <div class="upload1 mt-3">
                <label ><b class="">Image Address</b></label><br/>
                <input type='img' name="img" className='upload1_css form-control'/>
            </div>
              
            <div class="upload2 mt-3">
                <label ><b>Product Price</b></label><br/>
                <input type='number' name='price' className='upload2_css form-control'/>
            </div>

            <div class="upload3 mt-3">
                <label ><b>Rating</b></label><br/>
                <input type='number' name='starrating' className='upload3_css form-control'/><br/>
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
    
        <Footer/>
    </div>
    
       )

}


export default Upload