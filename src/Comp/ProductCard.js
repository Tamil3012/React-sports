import React from 'react'
import './../Comp/About.css'
import { useNavigate } from 'react-router-dom'
import { Shop } from './Shop';

export default function ProductCard(props) {
    const navigate = useNavigate();
  return (
    <div>
      
        <div className='card m-2 text-center cursor-pointer' role='button' style={{width:300}} onClick={() => navigate(`/product/${props.id}`)}>
            <div className='mt-2'>
                <img src ={props.thumbnail} alt={props.title} className='' />

            </div>
            <div className='card-body text-center'>
                <h5 className=''>{props.title}</h5>
                <h6 className='price'>Price :<span className='text-success'> {props.price}</span> <span className='text-danger'> {props.discountPercentage}%</span></h6>
                <h6>{props.stock > 0 ? <button className='btn btn-success  text-white fw-bolder'>Add+</button> : <button className='btn btn-outline-danger fw-bolder '>No stock</button>}</h6>  

            </div>
    </div>
    </div>
    
  )
}
