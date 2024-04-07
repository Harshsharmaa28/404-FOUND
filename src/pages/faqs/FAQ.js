"use client";
import { React, useState } from "react";

import Accordion from "./Accordion";

const FAQ = ({ faqs }) => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  return (
    <div className=" relative flex justify-center ">
      <div className=" w-full h-auto flex flex-col lg:flex-row justify-evenly items-center sm:px-48 p-4">
        <div className="p-4  sm:w-full md:w-full  rounded-lg">
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              id={faq.id}
              title={faq.query}
              answer={faq.ans}
              expanded={expandedAccordion === faq.id}
              onToggle={() => toggleAccordion(faq.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
