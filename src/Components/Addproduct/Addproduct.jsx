import React, { useState } from 'react'
import './Addproduct.css';
import upload_area from '../../assets/upload_area.svg'
function Addproduct() {
  const[image,setimage]=useState(false);
  const [productDeatiles,setproductDeatiles]=useState({name:'',
old_price:'',new_price:'',
category:'',
image:''})

const changeHandler=(e)=>{
  setproductDeatiles({...productDeatiles,[e.target.name]:e.target.value})
}
  const imageHandler=(e)=>{
    setimage(e.target.files[0]);
  }

  const addproduct=async()=>{
    console.log(productDeatiles)
    let responseData;
    let product=productDeatiles;

    let formData=new FormData();
    formData.append("product",image);

    await fetch("https://startling-faloodeh-fd04b5.netlify.app/upload",{
      method:'POST',
      headers:{Accept:'Application/json',

      },
      body:formData
    }).then((resp)=>resp.json()).then((data)=>{responseData=data})
    if(responseData.success){
      product.image=responseData.image_url
    }
    console.log(product)
    await fetch('https://startling-faloodeh-fd04b5.netlify.app/addproduct',{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      }
      ,
      body:JSON.stringify(product),
    }).then((resp)=>resp.json()).then((data)=>{
      data.success?alert("product added successfully"):alert("failed")
    })

  }
  return (
    <div className='addproduct'>
      <div className='product-itemfield'>
        <p>Add product</p>
        <input  value={productDeatiles.name} onChange={changeHandler}  type='text' placeholder='add product here' name='name'/>
      </div>
      <div className='product-price'>
      <div className='product-itemfield'>
        <p>Price</p>
        <input  value={productDeatiles.old_price} onChange={changeHandler}   type='text' placeholder='add product here' name='old_price'/>
      </div>

      <div className='product-itemfield'>
        <p>Offer Price</p>
        <input  value={productDeatiles.new_price} onChange={changeHandler}   type='text' placeholder='add product here' name='new_price'/>
      </div>

      </div>

      <div className='product-itemfield'>
        <p>Select</p>
        <select value={productDeatiles.category} onChange={changeHandler} name='category' className='addproduct-itemfield-selector'>
  {/* <option value='women'>Women</option> */}
  <option value='men'>Men</option>
  <option value='kid'>Kid</option>
  <option value='women'>Women</option>
</select>
      </div>
      
      <div className='product-itemfield'>
        <label htmlFor='file-input'>
          <img  src={image?URL.createObjectURL(image):upload_area} alt='upload_arae' className='product-thumnail-img'/>
        </label>
        <input onChange={imageHandler} type='file' name='image' id='file-input' hidden/>
      </div>
      <button onClick={()=>{addproduct()}}  className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default Addproduct
