import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Homeicon } from "../../utils/Constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const user = localStorage.getItem("user");
  const handleClick = () => {
    // Display toast notification based on user state
    if (user) {
      toast.info("Already Logged In");
    } else {
      toast.info("Navigating To Logged In");
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={`vsm:max-sm:flex vsm:max-sm:justify-between vsm:max-sm:gap-0 vsm:max-sm:  flex justify-center gap-20 py-4 `}>
      <div className=" flex gap-20 items-center">
        <Link className="vsm:max-sm:hidden font-medium hover:cursor-pointer" to="/">
          Home
        </Link>
        <Link className="vsm:max-sm:hidden font-medium hover:cursor-pointer" to="/academics">
          Academics
        </Link>
        <Link className="vsm:max-sm:hidden font-medium hover:cursor-pointer" to="/Mentors">
          Mentors
        </Link>
      </div>
      <Link>
        <img
          className="vsm:max-sm:w-[9rem] vsm:max-sm:h-auto hover:cursor-pointer w-[12rem] h-[3.5rem]"
          src={Homeicon}
          alt="error"
        />
      </Link>
      <div className=" items-center flex gap-20">
        <Link className="vsm:max-sm:hidden font-medium hover:cursor-pointer" to="/about">
          About Us
        </Link>
        <div
          onClick={scrollToContact}
          className="vsm:max-sm:hidden font-medium hover:cursor-pointer"
          to="/contact"
        >
          Contact Us
        </div>
        <Link to={user ? "/" : "/login"} onClick={handleClick}>
          <button
            type="button"
            className="vsm:max-sm:px-4 flex rounded-md bg-black px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Register
            <ArrowRight className=" mt-1 ml-2 h-4 w-4" />
          </button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
