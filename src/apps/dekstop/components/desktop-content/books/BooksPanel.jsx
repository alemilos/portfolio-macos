import React, { useState } from "react";

// Components
import ControlButtons from "../reusable/ControlButtons";
import Sidebar from "./Sidebar";
import BooksRouter from "./BooksRouter";
import DraggableBook from "./DraggableBook";

// Book Provider
import { useBook } from "../../../../../providers/BookProvider";

const BooksPanel = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { bookSelected } = useBook();

  return (
    <div id="books-panel" className="books-panel-container relative">
      {bookSelected && <DraggableBook />}
      <div className="books-panel-sidebar">
        <div className="books-panel-sidebar-header">
          <ControlButtons />
        </div>
        <Sidebar
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="books-panel-content">
        {/* The following header can be removed or used to build a 50px height */}
        <div className="books-panel-content-header"></div>
        <BooksRouter selectedOption={selectedOption} />
      </div>
    </div>
  );
};

export default BooksPanel;
