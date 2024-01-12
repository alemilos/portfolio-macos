import React from "react";

// Book provider
import { useBook } from "../../../../../../providers/BookProvider";

// Components
import EpubTopbar from "./EpubTopbar";
import EpubContent from "./EpubContent";

const EpubBook = () => {
  const { bookSelected } = useBook();

  return (
    <div className="">
      <EpubTopbar />
      <EpubContent book={bookSelected} />
    </div>
  );
};

export default EpubBook;
