
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './../images/banner1.jpg';
import img2 from './../images/banner2.jpg';
import img3 from './../images/banner3.jpg';
import sl1 from './../images/sl1.jpg';
import sl2 from './../images/sl2.jpg';
import img5 from './../images/img5.jpg';
import shop1 from './../images/shop1.jpg';
import shop2 from './../images/shop2.jpeg';

import { BsPatchCheckFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCardExchange } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";


import 'bootstrap/dist/css/bootstrap.min.css';
// import './../CarouselPage.css'
import './../Comp/Home.css'
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div >

        <div className='slider-main'>
            <Carousel>
                <Carousel.Item>
                  <img className='d-block w-100' src={img1}/>
                  <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100' src={img2} />
                  <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100' src={img3}/>
                  <Carousel.Caption>
                    {/* <h3>Third slide label</h3> */}
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </div>

        <section className='second'>

            <div className='container my-5'>
                <div className='row g-0 d-flex justify-content-center align-items-center'>
                      <div className='col-lg-3 col-md-6 col-sm-6 text-center' id='img-over'>
                          <div className='overly1 d-flex justify-content-center align-items-end'>
                              <h6 className='img-cont py-1 px-3 my-auto mb-2'>IT'S OFFICIAL <br/> WILLSON NBA</h6>
                          </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-6 text-center' id='img-over'>
                          <div className='overly2 d-flex justify-content-center align-items-end'>
                              <h6 className='img-cont py-1 px-3 my-auto mb-2'>UNLEASH YOUR <br/>CHAMPION</h6>
                          </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-6 text-center' id='img-over'>
                          <div className='overly3 d-flex justify-content-center align-items-end'>
                              <h6 className='img-cont py-1 px-3 my-auto mb-2'>NEW SEASON <br/>NEW VIBES</h6>
                          </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-6 text-center' id='img-over'>
                          <div className='overly4 d-flex justify-content-center align-items-end'>
                              <h6 className='img-cont py-1 px-3 my-auto mb-2  '>PADEL IS <br/> CALLING</h6>
                          </div>
                      </div>
                      
                     
                </div>
            </div>

        </section>


        <section className='fourth my-5 py-5 bg-white'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-7 col-md-12 col-sm-12'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='forth-over1 img-fuid d-flex justify-content-center align-items-center'>
                                        <button className='py-2 px-4 rounded-1 border-0 bg-black fw-bolder shop-bu '>Shop Now</button>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='forth-over2 img-fuid d-flex justify-content-center align-items-center'>
                                        <button className='py-2 px-4 rounded-1 border-0 bg-black fw-bolder shop-bu '>Shop Now</button>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='forth-over3 img-fuid d-flex justify-content-center align-items-center'>
                                        <button className='py-2 px-4 rounded-1 border-0 bg-black fw-bolder shop-bu '>Shop Now</button>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='forth-over4 img-fuid d-flex justify-content-center align-items-center'>
                                        <button className='py-2 px-4 rounded-1 border-0 bg-black fw-bolder shop-bu '>Shop Now</button>
                                    </div>
                              </div>
                        </div>
                    </div>

                    <div className='col-lg-5 col-md-12 col-sm-12'>
                          <div className='forth-over5 img-fuid d-flex justify-content-center align-items-center'>
                              {/* <button className='py-2 px-4 rounded-3 border-0 text-white fw-bolder shop-bu '>Shop Now</button> */}
                          </div>
                    </div>
                    
                </div>
            </div>
        </section>


        <section className='fifth my-5'>
              <div className='container-fluid'>
                    <div className='row gy-4'>
                      <div className='col-lg-6 col-mg-6 col-sm-12'>
                          <div className='shop1-img img-fluid'>
                              <div className='back-img'>
                                 <img className='img-fluid' src={shop1} />
                              </div>
                              <div className='top-cont text-white my-4 mx-5 '>
                                    <h1 className=' fw-bolder'>Delhi</h1>
                                    <h6>M.G.Road, 1st floor,<br/>Near Ghitorni Metro Stn, Delhi</h6>
                              </div>
                              <div className='over-cont'>
                                  <button className='m-5 px-4 py-2 border-0 rounded-1 fw-bolder text-white'>view shop</button>
                              </div>
                                
                          </div>
                      </div>
                      <div className='col-lg-6 col-mg-6 col-sm-12'>
                          <div className='shop1-img img-fluid'>
                              <div className='back-img'>
                                 <img className='img-fluid' src={shop2} />
                              </div>
                              <div className='top-cont text-white my-4 mx-5 '>
                                    <h1 className=' fw-bolder'>Kolkata</h1>
                                    <h6>7A Short Street, Gr. Floor,<br/>Near Park St, Kolkata</h6>
                              </div>
                              <div className='over-cont'>
                                  <button className='m-5 px-4 py-2 border-0 rounded-1 fw-bolder text-white'>view shop</button>
                              </div>
                                
                          </div>
                      </div>
                      
                    </div>
              </div>
        </section>


        <div className='slider-main'>
            <Carousel>
                <Carousel.Item>
                  <img className='d-block w-100' src={sl1}/>
                  <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100' src={sl2} />
                  <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </div>

        <section className='sixth my-5'>
            <div className='container-fluid six-con '>
              <div className='container py-4'>
                  <div className='row gy-2 d-flex justify-content-center align-items-center'>
                          <div className='col-lg col-md-4 col-sm-6 text-center'>
                            <h1 className='icons'><BsPatchCheckFill /></h1>
                            <h5 className='fw-bolder text-white'>100% Authentic</h5>      
                          </div>
                          <div className='col-lg col-md-4 col-sm-6  text-center'>
                            <h1 className='icons'><RiSecurePaymentFill /></h1>    
                            <h5 className='fw-bolder text-white'>Secure Shopping</h5>  
                          </div>
                          <div className='col-lg col-md-4 col-sm-6  text-center'>
                            <h1 className='icons'><TbTruckDelivery /></h1>  
                            <h5 className='fw-bolder text-white'>Express shipping</h5>    
                          </div>
                          <div className='col-lg col-md-4 col-sm-6  text-center'>
                            <h1 className='icons'><GiCardExchange /></h1>  
                            <h5 className='fw-bolder text-white'>Customized Services</h5>    
                          </div>
                          <div className='col-lg col-md-4 col-sm-6  text-center'>
                            <h1 className='icons'><GiSpellBook /></h1> 
                            <h5 className='fw-bolder text-white'>Buyers Guide</h5>     
                          </div>
                      </div>
              </div>
                  
            </div>
        </section>

        
 

    </div>
  )
}

export default Home