import React from "react";

// Utils
import { options } from "./options/Option";

// Components
import ReadingNow from "./pages/ReadingNow";
import Finished from "./pages/Finished";
import ToRead from "./pages/ToRead";

const BooksRouter = ({ selectedOption }) => {
  if (selectedOption === options.READING_NOW) {
    return <ReadingNow />;
  }
  if (selectedOption === options.FINISHED) {
    return <Finished />;
  }
  if (selectedOption === options.TO_READ) {
    return <ToRead />;
  }
};

export default BooksRouter;
