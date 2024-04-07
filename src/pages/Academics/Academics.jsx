import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { AcademicBg, blog, book, rocket, user, video } from '../../utils/Constant';
import { ArrowRight } from 'lucide-react'
import Footer from '../../components/Footer/Footer'
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
              <ArrowRight className=' bg-[#FFAB31] px-1 py-1 text-white rounded-full' />
            </button>
          </div>
        </div>
        <div className=' flex justify-between px-20'>
          <div>
            <span className=' text-[5rem] flex flex-wrap font-bold text-[#406A9A]'>Empower Yourself with Us</span>
            <span className='flex flex-wrap '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolorum veniam amet ipsum, impedit totam necessitatibus eveniet, esse ea odit, molestiae alias fuga repellendus quam? Eligendi nisi sapiente libero rem.</span>
          </div>
          <div>
            <img src={rocket} alt="error" />
          </div>
        </div>
        <div className=' py-4 flex justify-between px-36'>
          <div className=' shadow-md shadow-gray-300 rounded-xl w-[15rem] h-[15rem]'>
            <div className=' gap-1 py-4 px-6 flex flex-col absolute justify-center items-center'>
              <img className=' w-[6rem] h-[6rem]' src={book} alt="error" />
              <span className=' font-bold text-[#9064A3] text-3xl'>100+</span>
              <span className=''>Top Institutes’ Notes</span>
              <ArrowRight className=' hover:cursor-pointer text-[#9064A3] mt-4 -ml-14 rounded-full bg-white border border-[#9064A3] p-1' />
            </div>
          </div>
          <div className=' shadow-md shadow-gray-300 rounded-xl w-[15rem] h-[15rem]'>
            <div className=' gap-1 py-4 px-6 flex flex-col absolute justify-center items-center'>
              <img className=' w-[6rem] h-[6rem]' src={ video } alt="error" />
              <span className=' font-bold text-[#FFD08C] text-3xl'>120+</span>
              <span className=''>Video Tutorials References</span>
              <ArrowRight className='  hover:cursor-pointer text-[#FFD08C] mt-4 -ml-14 rounded-full bg-white border border-[#FFD08C] p-1' />
            </div>
          </div>
          <div className=' shadow-md shadow-gray-300 rounded-xl w-[15rem] h-[15rem]'>
            <div className=' gap-1 py-4 px-6 flex flex-col absolute justify-center items-center'>
              <img className=' w-[6rem] h-[6rem]' src={ user} alt="error" />
              <span className=' font-bold text-[#FF8C8C] text-3xl'>200+</span>
              <span className=''>Shared Experience</span>
              <ArrowRight className=' hover:cursor-pointer mt-4 -ml-14 rounded-full bg-white border border-[#FF8C8C] text-[#FF8C8C] p-1' />
            </div>
          </div>
          <div className=' shadow-md shadow-gray-300 rounded-xl w-[15rem] h-[15rem]'>
            <div className=' gap-1 py-4 px-6 flex flex-col absolute justify-center items-center'>
              <img className=' w-[6rem] h-[6rem]' src={ blog} alt="error" />
              <span className=' font-bold text-[#8CFF97] text-3xl'>200+</span>
              <span className=''>Blogs and content</span>
              <ArrowRight className=' hover:cursor-pointer text-[#8CFF97] mt-4 -ml-14 rounded-full bg-white border border-[#8CFF97] p-1' />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Academics
