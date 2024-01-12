import React, { useState } from "react";
import NotFoundBook from "./NotFoundBook";

const Book = ({ book, onBookClick }) => {
  const [showImage, setShowImage] = useState(true);

  const onError = () => {
    setShowImage(false);
  };

  const handleImgLoad = () => {
    setShowImage(true);
  };

  return (
    <div
      onClick={onBookClick}
      className="flex items-end rounded-sm cursor-pointer"
    >
      {showImage ? (
        <img
          className=" rounded-sm w-36 h-56"
          src={book.src}
          onError={onError}
          onLoad={handleImgLoad}
        />
      ) : (
        <NotFoundBook book={book} />
      )}
    </div>
  );
};

export default Book;
