import React from "react";
import { FaYoutube } from "react-icons/fa";

const TutorialComponent = () => {
  return (
    <div
      className=" mx-4 my-4 py-3 px-20 flex  justify-between rounded-lg "
      style={{
        border: "2px solid #000000",
        "box-shadow": "4px 4px 0px 0px #000000",
      }}
    >
      <div className=" text-2xl font-semibold ">
        Introduction to Artificial Intelligence
      </div>
      <div className=" text-[#E30F16] text-2xl pt-2 ">
        <FaYoutube />
      </div>
    </div>
  );
};

export default TutorialComponent;
