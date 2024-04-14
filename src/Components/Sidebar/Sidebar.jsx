import React from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom';
import product_icon from '../../assets/Product_Cart.svg';
import list_icon from '../../assets/Product_list_icon.svg';
function Sidebar() {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
            <div className='sidebar-item'>
            <img src={product_icon} alt='product_icon'/>
            <p>Add Product</p>
            </div>
        </Link>

        <Link to={'/listproduct'}style={{textDecoration:'none'}}>
        <div className='sidebar-item'>
            <img src={list_icon} alt='list_icon'/>
            <p>Product list</p>
            </div>
        </Link>
      
    </div>
  )
}

export default Sidebar
