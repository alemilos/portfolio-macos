import { useEffect } from "react";
import { useState, useContext, createContext } from "react";

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    handleResize(); // call on component mounts

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(width);

  return (
    <ScreenSizeContext.Provider value={{ width }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext);
  if (!context)
    throw new Error("useScreenSize must be used within ScreenSizeProvider");
  return context;
};

export default ScreenSizeProvider;
