// import React from "react";
// import { loginImage, logoImage } from "../../utils/Constant";

// const Signup2 = () => {
//   const handleSubmit=(e)=> {
//     e.preventDefault();

//   }
//   return (
//     <div className="flex flex-col lg:flex-row h-screen">
//       {/* Left Side: Sign In Form */}

//       <div className="lg:w-1/2 h-screen  bg-[#ECEDF0] flex justify-center  ">
//         <div className="w-full max-w-md ">
//           <div className="  flex justify-between items-center pt-5 pb-16 ">
//             <img src={logoImage} alt="Illustration" className="max-w-xl" />

//             <button
//               type="submit"
//               className=" bg-[#B378FF] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
//             >
//               SignIn
//             </button>
//           </div>
//           <h2 className="text-2xl font-bold mb-4">
//             Step 02/ <span className="text-[#636363]">02</span>{" "}
//           </h2>
//           <h2 className="text-4xl font-bold mb-4">Welcome,</h2>
//           <h2 className="text-2xl font-semibold mb-4">
//             Sign Up to continue...
//           </h2>
//           <form  onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="college" className="block mb-1 font-bold">
//                 Select College*
//               </label>
//               <select
//                 id="college"
//                 name="college"
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
//               >
//                 <option value="">Select college</option>
//                 <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="year" className="block mb-1 font-bold">
//                 Select Year*
//               </label>
//               <select
//                 id="year"
//                 name="year"
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
//               >
//                 <option value="">Select Year</option>
//                 <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="branch" className="block mb-1 font-bold">
//                 Select Branch*
//               </label>
//               <select
//                 id="branch"
//                 name="branch"
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
//               >
//                 <option value="">Select branch</option>
//                 <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option>
//               </select>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-[#5D8783] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
//             >
//               Submit
//             </button>
//             <h1 className="text-center"> Help? </h1>
//           </form>
//           <div className="mt-4 text-sm text-[#9F9F9F]">
//             This information will be secured as per our{" "}
//             <a href="#fd" className="text-[#323232] hover:underline">
//               Terms and Conditions
//             </a>
//             .
//           </div>
//         </div>
//       </div>

//       {/* Right Side: Image */}
//       <div className="lg:w-1/2 bg-white hidden lg:flex flex-col justify-center items-center">
//         <img src={loginImage} alt="Illustration" className="max-w-2xl" />
//         <div className=" text-center px-20 ">
//           <div className="   text-2xl font-bold">
//             Stay with us, learn with us
//           </div>
//           <div>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup2;

import React, { useState } from "react";
import { loginImage, logoImage } from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup2 = () => {
  const navigate = useNavigate();
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!college || !year || !branch)
      return toast.error("All fields are required!");

    navigate("/login");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side: Sign In Form */}
      <div className="lg:w-1/2 h-screen bg-[#ECEDF0] flex justify-center">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center pt-5 pb-16">
            <img src={logoImage} alt="Illustration" className="max-w-xl" />
            <button
              type="submit"
              className="bg-[#B378FF] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              SignIn
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Step 02/ <span className="text-[#636363]">02</span>{" "}
          </h2>
          <h2 className="text-4xl font-bold mb-4">Welcome,</h2>
          <h2 className="text-2xl font-semibold mb-4">
            Sign Up to continue...
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="college" className="block mb-1 font-bold">
                Select College*
              </label>
              <select
                id="college"
                name="college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              >
                <option value="">Select college</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="year" className="block mb-1 font-bold">
                Select Year*
              </label>
              <select
                id="year"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              >
                <option value="">Select Year</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="branch" className="block mb-1 font-bold">
                Select Branch*
              </label>
              <select
                id="branch"
                name="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              >
                <option value="">Select branch</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#5D8783] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
            <h1 className="text-center"> Help? </h1>
          </form>
          <div className="mt-4 text-sm text-[#9F9F9F]">
            This information will be secured as per our{" "}
            <a href="#fd" className="text-[#323232] hover:underline">
              Terms and Conditions
            </a>
            .
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2 bg-white hidden lg:flex flex-col justify-center items-center">
        <img src={loginImage} alt="Illustration" className="max-w-2xl" />
        <div className=" text-center px-20 ">
          <div className="   text-2xl font-bold">
            Stay with us, learn with us
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup2;
