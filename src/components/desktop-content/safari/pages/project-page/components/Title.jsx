import React from "react";

const Title = ({ title }) => {
  return (
    <div className="w-full">
      <p className="font-bold text-white text-3xl">{title}</p>
      <div className="bg-[gray] my-4 h-1 w-[150%]"></div>
    </div>
  );
};

export default Title;
