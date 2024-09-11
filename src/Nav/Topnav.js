import React from 'react'
import logo from './../images/logo1.png';
import './../Nav/Topnav.css'

export const Topnav = () => {
  return (
    <div className='text-center top-nav py-2 sticky-top'>
        <img src={logo} className='img-fluid' />
    </div>
  )
}
