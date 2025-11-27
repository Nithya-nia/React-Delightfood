import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { addTocart} from '../Addtocart/cartSlice';
import { deleteFromCart } from '../Addtocart/cartSlice';





const Card = (props) => {
   const cartitems=useSelector((state)=>state.cart.cartitems); 
  
  const dispatch=useDispatch(); 
 
  const addCart=(item)=>{ 
    dispatch(addTocart(item)) 
  } 
  
  const deleteCart=(item)=>{ 
    dispatch(deleteFromCart(item)) 
} 
 
   
                      
  
  return (
   
     
    <div>
   <section class="section-4 ">
  <div class="container mt-5">
    
    <div class="card-group">
      <div class="row row-cols-2 row-cols-md-4 g-2">
         {

            props.data.map((dataofmap)=>(
              <div class="col" key={dataofmap.id}>
              <div class="card border-0 ">
              <img src={dataofmap.image} class="card-img-top" alt="..."/>
              <div class="card-body text-center">
              <h5 class="card-title">{dataofmap.title}</h5>
        {
           dataofmap.star.map((data,index)=>
              <span key={index}>
                {data===1?  <i class="fa-solid fa-star text-success"></i>:
                  data===0?  <i class="fa-solid fa-star-half-stroke text-success"></i>:
                  <i class="fa-regular fa-star text-success"></i>
                }
              </span>
            )
           }
        
      <p class="card-text text-danger">{dataofmap.rupees}<del><small class="text-muted ">{dataofmap.muted}</small></del></p>
       { 
          cartitems.find(Items=>Items.id===dataofmap.id)?( 
          <button type="submit" class="add-to-cart-btn p-2"  onClick={()=>deleteCart(dataofmap)}>Remove From Cart</button>
            ) 
            : 
            (
            <button type="submit" class="add-to-cart-btn p-2"  onClick={()=>addCart(dataofmap)}>{dataofmap.button}</button>
) 
        } 
 </div>
  </div>
  </div>
                    ))
                  }
</div> 
</div> 
</div>
  
</section>
</div>

  )
}


export default Card