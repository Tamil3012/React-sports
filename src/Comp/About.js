import React from 'react'
import { ProductList } from './../Data/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Comp/About.css'
import ProductCard from './ProductCard';


const About = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
        {ProductList.map((product) => <ProductCard {...product} />)}
    </div>
  )
}

export default About