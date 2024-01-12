import React from "react";

// Components
import Book from "./Book";

// Hooks
import { useBook } from "../../../../../providers/BookProvider";

const Books = ({ books }) => {
  const { setBookSelected } = useBook();

  const onClick = (e, book) => {
    console.log("book selected event: ", e);
    setBookSelected(book);
  };

  return (
    <div className="grid grid-cols-3 gap-y-8 gap-x-11">
      {books.map((book) => (
        <Book key={book.id} book={book} onBookClick={(e) => onClick(e, book)} />
      ))}
    </div>
  );
};

export default Books;
