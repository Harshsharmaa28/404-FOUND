import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { AcademicBg, rocket } from '../../utils/Constant';
import { ArrowRight } from 'lucide-react'

const Academics = () => {
  return (
    <div className=' overflow-hidden'>
      <Navbar />
      <div className=''>
        <div className=''>
          <img className=' px-4 py-2 h-[38rem] w-screen rounded-none' src={AcademicBg} alt="" />
          <div className=' text-white overflow-hidden flex-col -mt-[30%] absolute flex items-center justify-center'>
            <span className='text-[5rem] font-bold'>ACADEMICS</span>
            <span className=' text-center text-5xl font-bold py-5'>Learn Anything, Anytime, Anywhere</span>
            <span className=' text-center flex flex-wrap max-w-[60%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ipsa molestiae cupiditate quidem, at consequatur rerum, vitae nostrum, fugit minima officiis! Totam delectus molestiae perferendis eius laudantium alias sequi ab.</span>
            <button
              type="button"
              className=" flex gap-3 rounded-full bg-white mt-16 px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Button text
              <ArrowRight className=' bg-[#FFAB31] px-1 py-1 text-white hover:px-0 hover:py-0 rounded-full' />
            </button>
          </div>
        </div>
        <div className=' flex  justify-between'>
          <div>
            <span className=' text-[5rem] flex flex-wrap font-bold text-[#406A9A]'>Empower Yourself with Us</span>
            <span className=' flex flex-wrap '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolorum veniam amet ipsum, impedit totam necessitatibus eveniet, esse ea odit, molestiae alias fuga repellendus quam? Eligendi nisi sapiente libero rem.</span>
          </div>
          <div>
            <img src={rocket} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academics
