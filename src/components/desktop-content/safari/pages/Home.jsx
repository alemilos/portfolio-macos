import React from "react";
// Image
import SafariBg from "../assets/bg.webp";
// Components
import Projects from "../components/Projects";

const Home = () => {
  let homeContainer = {
    backgroundImage: `url(${SafariBg})`,
    backgroundSize: "cover",
  };

  return (
    <div
      style={homeContainer}
      className="w-full h-full rounded-b-xl justify-center overflow-scroll py-[60px] px-[166px] "
    >
      <Projects />
    </div>
  );
};

export default Home;
