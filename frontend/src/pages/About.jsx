import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Sangam Mantra is a humble effort to bring you closer to tradition and divinity. We offer sacred books, puja samagri, and spiritual essentials with the aim to make every home a center of peace and devotion. Let your spiritual journey begin here, with authenticity and faith at its core.</p>
              <p>Born out of a deep respect for Indian rituals and culture, Sangam Mantra is more than a store — it’s a spiritual companion. We are here to support your path toward inner peace and divine connection.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Sangam Mantra, our mission is to make authentic spiritual products accessible to every devotee. With a curated range of puja samagri, holy scriptures, and divine essentials, we bridge tradition with modern convenience. Trusted by many, loved by families — we’re here to serve your faith with purity and purpose.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>Every product is handpicked and thoroughly checked to meet our uncompromising quality benchmarks.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>Enjoy a seamless shopping experience with our intuitive design and quick checkout process.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our friendly support team is always ready to help—because your satisfaction is what drives us.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
