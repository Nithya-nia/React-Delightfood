import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";

const Get= () => {

   const[ProductItems,setProductsItems]=useState([]);

  useEffect(()=>{
      fetch(`http://localhost:6001/getproduct`)
      .then((res)=>res.json())
      .then((data)=>
          setProductsItems(data))
  },[])
  
   const DeleteItems=(id)=>{
    fetch(`http://localhost:6001/deletesingleproduct/${id}`,{
      method:"DELETE",})
      .then((res)=>res.json())
      .then((data)=>{
          toast.error('deleted successfully');
      setProductsItems((prevProductItems)=>prevProductItems.filter((Items)=>Items._id!==id))
   })
   }

   return (
    <div className='mt-5 d-flex justify-content-center'>
      {/* <div className='card table2 mt-5'>
      <div className='card-body'> */}
  <table  style={{border:"solid 1px"}}>
        <div className='table1  text-center'> 
        <tr style={{border:"solid "}}>
            <th  style={{border:"solid "}}>TITLE</th>
            <th  style={{border:"solid "}}>IMAGE</th>
            <th  style={{border:"solid "}}>PRICE</th>
            <th  style={{border:"solid "}}>QUANTITY</th>
            <th  style={{border:"solid "}}>RATING</th>

            <th  style={{border:"solid "}}>ACTIONS</th>
        </tr>
            {ProductItems?.map((Item) =>(
                    <tr  style={{border:"solid "}} key={Item._id}>
                    <td  style={{border:"solid "}}>{Item.title}</td>
                    <td  style={{border:"solid "}}><img src={Item.img} alt=''/></td>
                    <td  style={{border:"solid "}}>{Item.price}</td>
                    <td  style={{border:"solid "}}>{Item.rating}</td>
                    <td  style={{border:"solid "}}>{Item.quantity}</td>
                    <td  style={{border:"solid "}}> 
                    <button className='table3' placeholder='delete'onClick={()=>DeleteItems(Item._id)}>delete</button>
                    <Link to={`/edit/${Item._id}`}><button><FiEdit /></button></Link> 
                    </td>
                    </tr>  
            ))}
        </div>
        {/* <div className='table2'>
        <button  placeholder='submit'>submit</button>
        </div> */}
  </table>
  </div>
//   </div>
//     </div>
  )
}

export default Get