import React, { useEffect } from "react";
import { badge, user } from "../../utils/Constant";
import SubjectComponent from "../Notes/SubjectComponent";
import { ArrowRight } from "lucide-react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/')
      localStorage.removeItem("user");
      window.location.reload();
    }
    catch (error) {
      console.error('Error signing out:', error.message);
    }
  }
  return (
    <div className="">
      <div className="vsm:max-sm:h-[15rem] w-screen px-4  bg-[#F3F3F3] h-[25rem]   flex justify-between ">
        <div className=" items-center flex flex-col">
          <img src={user} alt="Error" className=" mx-10 my-10  " />
          <button
            onClick={handleSignOut}
            type="button"
            className=" items-center flex rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Logout <ArrowRight className=" py-1 " />
          </button>
        </div>
        <div className="vsm:max-sm:overflow-scroll vsm:max-sm:text-sm vsm:max-sm:w-[20rem] w-[30rem] bg-white px-10 my-4 ">
          <p className=" pt-10 py-3 ">
            {" "}
            Name <span className="  pl-10 font-bold ">Devendra Singh</span>{" "}
          </p>
          <p className=" py-3 ">
            {" "}
            Branch{" "}
            <span className="  pl-10 font-bold ">
              Mechanical Engineering
            </span>{" "}
          </p>
          <p className=" py-3">
            {" "}
            Year <span className="  pl-10 font-bold "> {"    "} 2nd</span>{" "}
          </p>
          <p className=" py-3 ">
            {" "}
            Name <span className="  pl-10 font-bold ">Devendra Singh</span>{" "}
          </p>
          <p className=" py-3 ">
            {" "}
            Semester <span className="  pl-10 font-bold ">4th</span>{" "}
          </p>
          <p className=" py-3 ">
            {" "}
            College{" "}
            <span className=" text-sm  pl-10 font-bold ">
              National Institute of Technology Patna
            </span>{" "}
          </p>
          <p className=" py-3 ">
            {" "}
            Roll number <span className="  pl-10 font-bold ">2206080</span>{" "}
          </p>
        </div>
        <div className=" vsm:max-sm:hidden w-[30rem] h-[23rem] ">
          <div className=" h-[20rem]  bg-white px-10 my-4 ">
            <p className=" pt-10 py-3 ">
              {" "}
              Email{" "}
              <span className="  pl-10 font-bold ">
                monda.ug22.ec@nitp.ac.in
              </span>{" "}
            </p>
            <p className=" py-3 ">
              {" "}
              Contact <span className="  pl-10 font-bold ">
                7905468XXX
              </span>{" "}
            </p>
            <p className=" py-3">
              {" "}
              Git Hub{" "}
              <span className="  pl-10 font-bold ">
                {" "}
                {"    "} www.guthub.com/mohdarif
              </span>{" "}
            </p>
            <p className=" py-3 ">
              {" "}
              LinkedIn{" "}
              <span className="  pl-10 font-bold ">
                www.linkedin.com/mohdarif
              </span>{" "}
            </p>
          </div>
          <button className=" bg-[#625FFF] w-full py-2 rounded-lg  ">
            {" "}
            Download{" "}
          </button>
        </div>
        <div className="vsm:max-sm:hidden  h-[20rem] px-5   ">
          <img src={badge} alt="user" className=" mx-5 my-20 " />
          <button className=" bg-[#625FFF] w-full py-2 rounded-lg mt-20   ">
            {" "}
            Download{" "}
          </button>
        </div>
      </div>
      <div className="vsm:max-sm:flex-col vsm:max-sm:items-center flex justify-center py-6  gap-4">
        <div className=" flex justify-center items-center gap-4">
          <span className=" text-3xl">Your</span>
          <div class="inline-block rounded-2xl  px-2 py-1 w-fit bg-[#20C93B]">
            <h1 class="inline-block text-center text-xl font-bold border-dotted border-black border-2 rounded-3xl px-3">
              Notes
            </h1>
          </div>
        </div>
        <input
          className="vsm:max-sm: vsm:max-sm: w-30 px-10 border border-black rounded-full "
          placeholder="Your Serach"
          type="text"
        />
      </div>
      <div>
        <div className="vsm:max-sm:px-4 vsm:max-sm:text-2xl vsm:max-sm: font-bold text-3xl flex  gap-5 justify-between px-28">
          <div className="py-2 border border-dashed rounded-xl border-black text-center w-[25rem] h-auto bg-[#F3F3F3]">
            Branch
          </div>
          <div className="py-2 border border-dashed  border-black rounded-xl  text-center w-[60rem] h-auto bg-[#F3F3F3]">
            Subject
          </div>
        </div>
        <div className="vsm:max-sm: px-4 gap-5 h-screen py-4 flex sm:px-28 justify-between">
          <div className="vsm:max-sm:hidden flex flex-col gap-4 py-2 border border-dashed  border-black rounded-lg w-[25rem] h-auto bg-[#F3F3F3]">
            <div className="vsm:max-sm:px-2 font-medium sm:ml-5">Computer Science Engineering</div>
            <div className="vsm:max-sm:px-2 font-medium sm:ml-5">
              Electronics and Communication Engineering
            </div>
            <div className="vsm:max-sm:px-2 font-medium sm:ml-5">Electrical Engineering</div>
            <div className="vsm:max-sm:px-2 font-medium sm:ml-5">Mechanical Engineering</div>
            <div className="vsm:max-sm:px-2 font-medium sm:ml-5">Civil Engineering</div>
          </div>
          <div className="vsm:max-sm: flex flex-wrap py-2 border border-dashed overflow-y-scroll  border-black rounded-lg  text-center w-[60rem] h-auto bg-[#F3F3F3]">
            {[...Array(25)].map((_, index) => (
              <SubjectComponent key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
