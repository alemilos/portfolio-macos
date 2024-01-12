import React from "react";

// Components
import ReadingNow from "./options/ReadingNow";
import Finished from "./options/Finished";

// Options Enum
import { options } from "./options/Option";
import ToRead from "./options/ToRead";

const Sidebar = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className="px-2 flex flex-col gap-1">
      <ReadingNow
        selected={selectedOption === options.READING_NOW}
        setSelectedOption={setSelectedOption}
      />
      <Finished
        selected={selectedOption === options.FINISHED}
        setSelectedOption={setSelectedOption}
      />
      <ToRead
        selected={selectedOption === options.TO_READ}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
};

export default Sidebar;
