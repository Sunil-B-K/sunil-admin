import React, { useEffect, useState } from 'react'
import './Listproduct.css';
import cross_icon from '../../assets/cross_icon.png';

function Listproduct() {
  const[allproduct,setallproduct]=useState([])
  const fechInfo=async()=>{
    await fetch('https://e-backend-jkn8.onrender.com/getallproducts')
    .then((resp)=>resp.json())
    .then((data)=>{setallproduct(data)})
  }
  useEffect(()=>{
    fechInfo()
  },[])

  const remove_product=async(id)=>{
    await fetch('https://e-backend-jkn8.onrender.com/removeproduct',{
      method:'POST',
      headers:{
        Accept:"Application/json",
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({id:id})
    })
    await fechInfo()
    
  }
  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old_price</p>
        <p>New_price</p>
        <p>category</p>
        <p>Remove</p>
        
      </div>
      <div className="listproduct-allproduct">
      <hr/>
        {allproduct.map((product,index)=>{
          return <> <div key={index} className='listproduct-format-main listproduct-format'>
            <img className='listproduct-producticon' src={product.image} alt={product.name}/>
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}}  className='listproduct-remove-icon' src={cross_icon} alt='cross_icon'/>

          </div>
          <hr/>
          </>
        })}

      </div>
      
    </div>
  )
}

export default Listproduct
