import React from 'react'


const Card = (props) => {
  return (
    <div>
   <section class="section-4 ">
  <div class="container mt-5">
    
    <div class="card-group">
      <div class="row row-cols-2 row-cols-md-4 g-2">
         {
            props.data.map(({id,image,title,rupees,muted,button,star})=>(

      <div class="col" key={id}>
  <div class="card border-0 ">
    <img src={image} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
       <h5 class="card-title">{title}</h5>
        {
            star.map((data,index)=>
              <span key={index}>
                {data===1?  <i class="fa-solid fa-star text-success"></i>:
                  data===0?  <i class="fa-solid fa-star-half-stroke text-success"></i>:
                  <i class="fa-regular fa-star text-success"></i>
                }
              </span>
            )
           }
        
      <p class="card-text text-danger">{rupees}<del><small class="text-muted ">{muted}</small></del></p>
      
      <button type="submit" class="add-to-cart-btn p-2">
            {button}
          </button>
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