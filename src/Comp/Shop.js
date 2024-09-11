import React from 'react'
import About from './About'
import './../Comp/About.css'
import shoptop from './../images/shoptop.jpg';

export const Shop = () => {
  return (
    <div>
        <div className='mb-5'>
                    
          <div className='shop-top d-flex justify-content-center align-items-center'>
              <h1 className=' fw-bolder text-white py-3'>SHOP</h1>
          </div>               
                
        </div> 
        <About/>
    </div>
  )
}
