import React from "react";
import { triangle } from "../../utils/Constant";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" vsm:max-sm:w-full py-2 px-4">
      <div className=" bg-black w-full h-[20rem] flex text-white rounded-2xl">
        <img
          className="vsm:max-sm:hidden w-[12rem] h-[12rem] -mt-3 -ml-4"
          src="./assests/circle.png"
          alt="error"
        />
        <div className="vsm:max-sm:gap-9 vsm:max-sm: vsm:max-sm:px-10 vsm:max-sm:py-4 sm:py-20 flex sm:px-24 sm:gap-36">
          <div className=" flex text-white flex-col">
            <div className="font-semibold text-xl">Qucik Links</div>
            <br />
            <Link to="/">Home</Link>
            <Link to="/scholarship">Scholarship</Link>
            <Link to="/Mentors">Mentors</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">
              {" "}
              <div onClick={scrollToContact}>Contact Us</div>
            </Link>
          </div>
          <div className=" flex text-white flex-col">
            <div className=" font-semibold text-xl">Qucik Links</div>
            <br />
            <Link to='/academics'>Academics</Link>
            <Link to='/'>Home</Link>
            <Link to='/scholarship'>Scholarship</Link>
            <Link to='/Mentors'>Mentors</Link>
            <Link to='/about'>About Us</Link>
          </div>
        </div>
        <div className=" vsm:max-sm:hidden flex">
          <div className=" ml-36 py-7">
            <img src="./assests/icon.png" alt="error" />
            <div className=' mt-4 flex w-[20rem] flex-wrap'> Thank you for visiting Nexlearn. We encourage you to continue your learning journey and explore the wealth of resources available. We look forward to seeing you again on Nexlearn!
</div>
            <button
              type="button"
              className=" mt-8 w-[10rem] bg-white rounded-3xl border border-black px-3 py-2 text-sm text-black font-bold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              JOIN NOW
            </button>
          </div>
          <img
            className=" overflow-hidden absolute mt-[5.5%] ml-[35%] w-[14rem] h-[14rem]"
            src={triangle}
            alt=""
          />
        </div>
      </div>
      <div className=" absolute -mt-10 text-center w-[90%] text-white">
        <div className="text-center ">All right reserved Copyright 2024</div>
      </div>
    </div>
  );
};

export default Footer;
