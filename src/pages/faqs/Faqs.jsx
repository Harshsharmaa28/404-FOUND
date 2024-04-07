import React, { useState } from "react";

import FAQ from "./FAQ";
import {
  eventsFaqs,
  genralFaqs,
  inductionFaqs,
  servicesFaqs,
} from "../../utils/Constant";

const Faqs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const TabContent = {
    1: <FAQ faqs={eventsFaqs} />,
    2: <FAQ faqs={servicesFaqs} />,
    3: <FAQ faqs={genralFaqs} />,
    4: <FAQ faqs={inductionFaqs} />,
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div class="text-center py-2">
        <h1 class="inline-block capitalize px-3 ">GET ANSWERS OF</h1>
        <div class="inline-block rounded-2xl m-auto px-2 py-1 w-fit bg-[#FE3D4D]">
          <h1 class="inline-block text-center text-xl font-bold border-dotted border-black border-2 rounded-3xl px-3">
            FAQs
          </h1>
        </div>
        <div
          style={{ border: "5px solid #FFCDCD" }}
          className=" mx-auto my-2  w-[250px]"
        ></div>
      </div>
      {/* <div className="text-center">
        <h1>GeT ANSWERS OF</h1>
        <div className="rounded-2xl m-auto px-2 py-1 w-fit bg-[#2097C9] ">
          <h1 className="text-center text-xl font-bold border-dotted border-black border-2 rounded-3xl  px-3">
            Members
          </h1>
        </div>
      </div> */}
      <div className="flex justify-evenly items-center ">
        <TabButton
          title="Events"
          onClick={() => changeTab(1)}
          isActive={activeTab === 1}
        />
        <TabButton
          title="Induction"
          onClick={() => changeTab(2)}
          isActive={activeTab === 2}
        />
        <TabButton
          title="Services"
          onClick={() => changeTab(3)}
          isActive={activeTab === 3}
        />
        <TabButton
          title="Genral"
          onClick={() => changeTab(4)}
          isActive={activeTab === 4}
        />
      </div>
      <div className="mt-4">{TabContent[activeTab]}</div>
      
    </div>
  );
};

const TabButton = ({ title, onClick, isActive }) => {
  return (
    <button
      className={` ${
        isActive ? "bg-[#FE3D4D] text-white " : ""
      }  bg-[#FFCDCD]-600 rounded-xl px-4 py-2 `}
      style={{
        boxShadow: "4.38px 4.38px 0px 0px #000000",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Faqs;
