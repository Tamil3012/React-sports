import React from 'react'
import logo from './../images/logo1.png'
import './../Nav/Footer.css'

export const Footer = () => {
  return (
    <section className='mainfooter' >
        <div className='container-fluid mt-5 footer'>
            <div className='row gy-4 py-5 foot-main'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <img src={logo} className='img-fluid footer-logo' />
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className=''>
                        <h5 className='fw-bolder mb-3 '>Customer Service</h5>
                        <h6>Help Center</h6>
                        <h6>Order Tracking</h6>
                        <h6>Returns & Refunds</h6>
                        <h6>Shipping & Delivery</h6>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className=''>
                        <h5 className='fw-bolder mb-3 '>Contact Information</h5>
                        <h6><a href='tel:+918525023007'>+91 8525023007</a></h6>
                        <h6><a href='mailto:tamilvalavan115@gmail.com'>tamilvalavan115@gmail.com</a></h6>
                        <h6>123 Sports Ave, City, Country</h6>
                    </div>
                </div>             
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className=''>
                        <h5 className='fw-bolder mb-3 '>Get in touch</h5>
                        <div className='foot-icon'>
                            <i class="fa-brands fa-facebook-f border-1"></i>
                            <i class="fa-brands fa-x-twitter mx-3"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                        <h6>Subscribe</h6>
                        <input type='text' className='py-2 px-2 sm-px-0 rounded-5 sub' placeholder='Email' /> <button className='py-2 px-3 text-white fw-bolder rounded-5 border-0 sub-btn'>Subscribe</button>
                    </div>
                </div>
            </div>

            
        </div>
        <div className='last-footer text-center mb-0'>
                <h6 className='fw-bolder text-white py-4'>© 2024 Sports Shop. All Rights Reserved.</h6>
            </div>
    </section>
    
  )
}
