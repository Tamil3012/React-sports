import React from 'react'
import './../Comp/Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
        <section>

            <div className='shop-top d-flex justify-content-center align-items-center'>
                <h1 className=' fw-bolder text-white py-3'>CONTACT</h1>
            </div>

            <div className='container-fluid my-5'> 
                <div className='container'>
                    <div className='row gy-3 d-flex justify-content-center align-items-center'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div className='con-left'>
                              <div className='text-center'>
                                <h1 className='con-icon'><FaLocationDot/></h1>
                                <h4>Address</h4>
                                <h6>Local Area,6th Medil street</h6>
                              </div>
                              <div className='text-center'>
                                <h1 className='con-icon'><IoMdCall/></h1>
                                <h4>Phone</h4>
                                <h6>+91 5679 238900</h6>
                                <h6>+91 5679 238900</h6>
                              </div>
                              <div className='text-center'>
                                <h1 className='con-icon'><MdEmail/></h1>
                                <h4>Email</h4>
                                <h6>demo3112@gmail.com</h6>
                              </div>
                                 
                                 
                            </div>
                        </div>

                        <div className='col-lg-8 col-md-8 col-sm-12'>
                              <div>
                                  <h3 className='con-title'>Send us a message</h3>
                                  <h6>Our customer support team is available during our business hours to assist you with any inquiries. Please feel free to reach out to us via phone or email, and we'll get back to you as soon as possible.</h6>
                              </div>
                              <form className='d-flex flex-column con-form'>
                                  <input type='text' className='my-2 p-2 border-0 rounded-1' placeholder='Enter your name' />
                                  <input type='text' className='my-2 p-2 border-0 rounded-1' placeholder='Enter your email' />
                                  <textarea rows="4" className='my-2 p-2 border-0 rounded-1' cols="50" name="comment" form="usrform" placeholder='Enter your message'></textarea>
                                  <button className='btn con-bu text-white fw-bolder border-0 rounded-1 py-2 px-4'>Send Now</button>
                              </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='location-map container-fluid'>
                  <div>
                      <iframe className='w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52656.798606039265!2d78.10481328556052!3d8.776774526854703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ee67b4ad764f%3A0x2443e6dc90ee7d3!2sThoothukudi%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1724726144941!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
            </div>


        </section>
  )
}

export default Contact