import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  AcademicBg,
  blog,
  book,
  rocket,
  user,
  video,
} from "../../utils/Constant";
import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
const Academics = () => {
  return (
    <div className=''>
    <div className=" overflow-hidden">
      <Navbar />
      <div className=''>
        <div className=' '>
          <img className='vsm:max-sm:h-[30rem] px-4 py-2 sm:h-[38rem] w-screen rounded-none' src={AcademicBg} alt="" />
          <div className='vsm:max-sm:-mt-96 w-screen text-white flex-col -mt-[30%] absolute flex items-center justify-center'>
            <span className='vsm:max-sm:text-5xl text-[5rem] font-bold'>ACADEMICS</span>
            <span className='vsm:max-sm:text-lg text-center text-5xl font-bold py-5'>Learn Anything, Anytime, Anywhere</span>
            <span className='vsm:max-sm:flex-wrap vsm:max-sm:px-10 text-center flex flex-wrap sm:max-w-[60%]'>Demolish skill gaps.Learn anything,anywhere.Nexlearn empowers your academic journey with comprehensive resources and personalized learning tools.</span>
            <button
              type="button"
              className=" flex gap-3 rounded-full bg-white mt-16 px-4 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
              <ArrowRight className=' bg-[#FFAB31] px-1 py-1 text-white rounded-full' />
            </button>
      <div className="">
        <div className="">
          <img
            className="vsm:max-sm:h-[30rem] px-4 py-2 sm:h-[38rem] w-screen rounded-none"
            src={AcademicBg}
            alt=""
          />
          <div className="vsm:max-sm:-mt-96 text-white overflow-hidden flex-col -mt-[30%] absolute flex items-center justify-center">
            <span className="vsm:max-sm:text-5xl text-[5rem] font-bold">
              ACADEMICS
            </span>
            <span className="vsm:max-sm:text-lg text-center text-5xl font-bold py-5">
              Learn Anything, Anytime, Anywhere
            </span>
            <span className="vsm:max-sm:flex-wrap vsm:max-sm:px-10 text-center flex flex-wrap sm:max-w-[60%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              ipsugit minima officiis! Totam delectus molestiae perferendis eius
              laudantium alias sequi ab.
            </span>
            <Link to="/signup1">
              <button
                type="button"
                className=" flex gap-3 rounded-full bg-white mt-16 px-4 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Join Now
                <ArrowRight className=" bg-[#FFAB31] px-1 py-1 text-white rounded-full" />
              </button>
            </Link>
          </div>
        </div>
        <div className="vsm:max-sm:px-5 flex justify-between sm:px-20">
          <div>
            <span className='vsm:max-sm:text-2xl vsm:max-sm: text-[5rem] flex sm:flex-wrap font-bold text-[#406A9A]'>Empower Yourself with Us</span>
            <span className='vsm:max-sm:text-sm flex flex-wrap '>Empower yourself with us
master your subject by exploring our comprehensive note collection,video lectures and mentorship.You can learn any course, anytime and improve your learnings..</span>
            <span className="vsm:max-sm:text-2xl vsm:max-sm: text-[5rem] flex sm:flex-wrap font-bold text-[#406A9A]">
              Empower Yourself with Us
            </span>
            <span className="vsm:max-sm:text-sm flex flex-wrap ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              dolorum veniam amet ipsum, impedit totam necessitatibus eveniet,
              esse ea odit, molestiae alias fuga repellendus quam? Eligendi nisi
              sapiente libero rem.
            </span>
          </div>
          <div className=" vsm:max-sm:hidden">
            <img src={rocket} alt="error" />
          </div>
        </div>
        <div className="vsm:max-sm:justify-center vsm:max-sm:gap-5 vsm:max-sm:flex-wrap py-4 flex justify-between sm:px-36">
          <div className=" shadow-md shadow-gray-300 rounded-xl w-[15rem] h-[15rem]">
            <div className=" gap-1 py-4 px-6 flex flex-col absolute justify-center items-center">
              <img className=" w-[6rem] h-[6rem]" src={book} alt="error" />
              <span className=" font-bold text-[#9064A3] text-3xl">100+</span>
              <span className="">Top Institutes’ Notes</span>
              <Link to="/notes">
                <ArrowRight className=" hover:cursor-pointer text-[#9064A3] mt-4 -ml-14 rounded-full bg-white border border-[#9064A3] p-1" />
              </Link>
            </div>
          </div>
          <div className=" shadow-md shadow-gray-300 rounded-xl w-[15rem] h-[15rem]">
            <div className=" gap-1 py-4 px-6 flex flex-col absolute justify-center items-center">
              <img className=" w-[6rem] h-[6rem]" src={video} alt="error" />
              <span className=" font-bold text-[#FFD08C] text-3xl">120+</span>
              <span className="">Video Tutorials References</span>
              <Link to="/profileref">
                <ArrowRight className="  hover:cursor-pointer text-[#FFD08C] mt-4 -ml-14 rounded-full bg-white border border-[#FFD08C] p-1" />
              </Link>
            </div>
          </div>
          <div className=" shadow-md shadow-gray-300 rounded-xl w-[15rem] h-[15rem]">
            <div className=" gap-1 py-4 px-6 flex flex-col absolute justify-center items-center">
              <img className=" w-[6rem] h-[6rem]" src={user} alt="error" />
              <span className=" font-bold text-[#FF8C8C] text-3xl">200+</span>
              <span className="">Shared Experience</span>
              <ArrowRight className=" hover:cursor-pointer mt-4 -ml-14 rounded-full bg-white border border-[#FF8C8C] text-[#FF8C8C] p-1" />
            </div>
          </div>
          <div className=" shadow-md shadow-gray-300 rounded-xl w-[15rem] h-[15rem]">
            <div className=" gap-1 py-4 px-6 flex flex-col absolute justify-center items-center">
              <img className=" w-[6rem] h-[6rem]" src={blog} alt="error" />
              <span className=" font-bold text-[#8CFF97] text-3xl">200+</span>
              <span className="">Blogs and content</span>
              <ArrowRight className=" hover:cursor-pointer text-[#8CFF97] mt-4 -ml-14 rounded-full bg-white border border-[#8CFF97] p-1" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Academics;
