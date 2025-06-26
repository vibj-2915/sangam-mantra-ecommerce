import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

    <div>
        <img src={assets.Vibhu} className='w-32 mb-2' alt="Vibhu Jha" />
        <div className='w-32 text-center'>
          <p className='text-gray-600'>Vibhu Jha</p>
          <p className='text-gray-600'>Founder & CEO</p>
        </div>
    </div>


        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 1111-1111-11</li>
                <li>contact@sangammantra.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ sangammantra.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
