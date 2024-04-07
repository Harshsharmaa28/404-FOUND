import React from "react";

const Infodiv = ({ title, subTitle, color }) => {
  return (
    <div className="rounded-lg w-[15rem] h-[15rem]">
      <div
        className={`h-2/3 w-full `}
        style={{
          backgroundColor: color,
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      ></div>
      <div className="h-1/3 text-center w-full">
        <h1 className="font-bold">{title}</h1>
        <p className="text-xs">{subTitle}</p>
      </div>
    </div>
  );
};

export default Infodiv;
