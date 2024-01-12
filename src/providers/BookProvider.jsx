import { createContext, useContext, useEffect, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookSelected, setBookSelected] = useState(false);

  useEffect(() => {}, []);

  return (
    <BookContext.Provider value={{ bookSelected, setBookSelected }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
  const context = useContext(BookContext);
  return context
    ? context
    : Error("useBook must be used inside a BookProvider");
};

export default BookProvider;
