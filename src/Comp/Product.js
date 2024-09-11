import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductList } from '../Data/ProductList';
import './../Comp/Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Product() {
    const params = useParams();
    const props = ProductList.find(
        (element) => element.id === parseInt(params.id)
    )

    const [count,setCount] = useState(0);

    // function decrement(){
    //     setCount((count) => count -1)
    // }
    // function increment(){
    //     setCount((count) => count +1)
    // }
  return (  
    <div className='order-card m-2 '>
        <div className='img-fluid text-center'>
            <img  src ={props.thumbnail}  alt={props.title} className='img-fluid' />

        </div>
        <div className=''>
            <h5 className=''>{props.title}</h5>
            <h4 className='my-3'>{props.description}</h4>
            <h6 className='price'>Price :<span className='text-success'> {props.price}</span> </h6>
            <h6 className='price'>Discount : <span className='text-danger'> {props.discountPercentage}%</span></h6>
            <div className='d-flex my-4'>
                <button className='py-0 px-3 border-0 bg-dark text-white fw-bolder' onClick={() => setCount(count - 1)}>-</button>  
                <h5 className='count-bx text-center'>{count}</h5>  
                <button className='py-0 px-3 border-0 bg-dark text-white fw-bolder' onClick={() => setCount(count + 1)}>+</button>
            </div>  
            <h5 className='text-warning fw-bolder'><i class="fa-solid fa-star "></i>Rating {props.rating}</h5>
        </div>
    </div>
  )
}
