import { useDispatch,useSelector } from 'react-redux'; 
import { deleteFromCart,updateQuantity } from '../Addtocart/cartSlice'; 
import Cart_css from '../Pages/Cart.js'
 
const Cartpage = () => { 
    const cartitems=useSelector((state)=>state.cart.cartitems); 
 
    const dispatch=useDispatch(); 
    
    const deleteCart=(item)=>{ 
          dispatch(deleteFromCart(item)) 
      } 
 
      const incrementCart=(id,quantity)=>{ 
         dispatch(updateQuantity({id, quantity : quantity+1})) 
      } 
 
  const decrementCart=(id,quantity)=>{ 
    if(quantity>1){ 
      dispatch(updateQuantity( 
        {id, quantity : quantity-1} 
      ) 
      ) 
    } 
  } 
 
  return ( 
    <section> 
    <div className="BestSelllings"> 
        <h2 className='BestSellerHeader text-center mt-4' >MY CART PRODUCTS</h2> 
        <h6 className='BestSellerDes text-center'>Grab our best products to brighten 
your day</h6>             
        <div class="container text-center" className='ProductContainer'> 
          <div class="row"> 
            { 
                cartitems.map((item)=>{ 
                    return( 
                        <div class=" container col-lg-3" key={item.id}> 
                       
                            
  <div class="card  mt-3 ">
    <img src={item.image} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">{item.title}</h5>
        {
           item.star.map((data,index)=>
              <span key={index}>
                {data===1?  <i class="fa-solid fa-star text-success"></i>:
                  data===0?  <i class="fa-solid fa-star-half-stroke text-success"></i>:
                  <i class="fa-regular fa-star text-success"></i>
                }
              </span>
            )
           }
        
      <p class="card-text text-danger">{item.rupees}<del><small class="text-muted ">{item.muted}</small></del></p>
  
<div className='' style={{display:'flex',justifyContent:'center',marginBottom:'20px',borderRadius:'40px',border:'solid',borderColor:'rose',width:'20%',marginLeft:'40%',padding:'2px'}}> 
<button className="qty-btn "style={{border:'none',paddingRight:'5px'}}onClick={()=>{decrementCart(item.id,item.quantity)}}>-</button> 
                                {item.quantity} 
                                 <button style={{border:'none',paddingLeft:'5px'}}
onClick={()=>{incrementCart(item.id,item.quantity)}} >+</button> 
                            </div> 
                      
  
                            <button className="btn-cartbutton" 
onClick={()=>deleteCart(item)} style={{backgroundColor:'rose',border:'solid',borderColor:'rose',borderRadius:'10px',padding:'2px',}}> Delete From Cart
</button> 
                                
                          </div>             
                        
                        </div> 
                      </div> 
                    ) 
                }) 
            } 
          </div> 
      </div> 
    </div>   
    </section> 
  ) 
} 
 
export default Cartpage