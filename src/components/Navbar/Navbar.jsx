import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom';
import { Homeicon } from '../../utils/Constant';



const Navbar = () => {
  return (
    <div className=' flex justify-center gap-20 py-4'>
      <div className=' flex gap-20 items-center'>
        <Link className=' font-medium hover:cursor-pointer' to="/">Home</Link>
        <Link className=' font-medium hover:cursor-pointer' to="/academics">Academics</Link>
        <Link className=' font-medium hover:cursor-pointer' to="/Mentors">Mentors</Link>
      </div>
      <img className=' hover:cursor-pointer w-[12rem] h-[3.5rem]' src={Homeicon} alt="error" />
      <div className=' items-center flex gap-20'>
        <Link className=' font-medium hover:cursor-pointer' to="/about">About Us</Link>
        <Link className=' font-medium hover:cursor-pointer' to="/contact">Contact Us</Link>
        <Link to='/login'>
          <button
            type="button"
            className=" flex rounded-md bg-black px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Register
            <ArrowRight className=" mt-1 ml-2 h-4 w-4"/>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar