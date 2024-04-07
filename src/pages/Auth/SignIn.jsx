import React, { useState } from "react";
import { loginImage, logoImage } from "../../utils/Constant";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./Firebase-config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return toast.error("All fields are required");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("SignIn SucessFully");
      setTimeout(() => {
      navigate("/");
    }, 2000); 
    } catch (error) {
      toast.error("Sigin Failed");
    }
  };

  return (
    <div className="vsm:max-sm:w-screen flex flex-col lg:flex-row h-screen">
      {/* Left Side: Sign In Form */}
      <div className="vsm:max-sm:w-full lg:w-1/2 sm:h-screen bg-[#ECEDF0] flex justify-center">
        <div className="vsm:max-sm:w-[80%] w-full max-w-md ">
          <div className="flex justify-between items-center pt-10 pb-40">
            <img src={logoImage} alt="Illustration" className="max-w-xl" />
            <button
              type="submit"
              className="bg-[#B378FF] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              SignUp
            </button>
          </div>
          <h2 className="text-4xl font-bold mb-4">Welcome,</h2>
          <h2 className="text-2xl font-semibold mb-4">
            Sign In to continue...
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1 font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="mr-2"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#fdf" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#5D8783] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
          <div className="mt-4 text-sm text-[#9F9F9F]">
            By signing in, you agree to our{" "}
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
        <div className="text-center px-20">
          <div className="text-2xl font-bold">Stay with us, learn with us</div>
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

export default SignIn;
