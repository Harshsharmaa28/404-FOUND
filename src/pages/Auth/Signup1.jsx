import React, { useState } from "react";
import { loginImage, logoImage } from "../../utils/Constant";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "./Firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required");
    }
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Sign up SucessFully");
      navigate("/signup2");
      setName("");
      setEmail("");
      setPassword("");
      
    } catch (error) {
      console.log(error);
    }
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
            Step 01/ <span className="text-[#636363]">02</span>{" "}
          </h2>
          <h2 className="text-4xl font-bold mb-4">Welcome,</h2>
          <h2 className="text-2xl font-semibold mb-4">
            Sign Up to continue...
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 font-bold">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              />
            </div>
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
            <button
              type="submit"
              className="w-full bg-[#5D8783] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Next
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

export default Signup1;
