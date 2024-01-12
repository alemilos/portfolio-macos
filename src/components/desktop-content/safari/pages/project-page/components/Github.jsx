import React from "react";
import { FaGithub } from "react-icons/fa";

const Github = ({ link }) => {
  function handleClick() {
    window.open(link, "_blank");
  }
  return (
    link && (
      <div className="text-white cursor-pointer w-full flex flex-col items-end ">
        <FaGithub className="text-4xl" onClick={handleClick} />
      </div>
    )
  );
};

export default Github;
