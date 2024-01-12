import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Logo
import appLogo from "../../assets/logo/apple.png";

// Sound
import startupSound from "../../assets/sounds/startupmac.mp3";

// Components
import Loader from "./Loader";

const LoadingMac = () => {
  const [loading, setLoading] = useState(true);
  const [playSound, setPlaySound] = useState(false);
  const navigate = useNavigate();
  const timer = 2000;

  useEffect(() => {
    if (!loading) {
      new Audio(startupSound).play();
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [loading]);

  return (
    <div className="h-screen w-screen bg-black flex flex-col gap-24 items-center justify-center">
      <img className="w-24 h-24" src={appLogo} />
      <Loader timer={timer} setLoading={setLoading} />
    </div>
  );
};

export default LoadingMac;
