import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Image
import background from "../../assets/macos-background.jpeg";
import myself from "../../assets/myself.jpg";

// Text
import text from "../../../../text/loginpage.json";
import { useLanguage } from "../../../../providers/LanguageProvider";

const LoginMac = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const bgImage = {
    backgroundImage: `url('${background}')`,
    backgroundSize: "cover",
  };
  const meImage = {
    backgroundImage: `url('${myself}')`,
    backgroundSize: "cover",
  };

  const textShadow = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adjust the values to customize the shadow effect
  };

  useEffect(() => {
    const handleClick = () => {
      navigate("/alessandro");
    };

    window.addEventListener("keydown", handleClick);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleClick);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div style={bgImage} className="h-screen w-screen relative gap-64 ">
      <div
        style={meImage}
        className="rounded-full h-36 w-36 absolute left-[50%] translate-x-[-50%] top-[22%]"
      ></div>
      <p
        style={textShadow}
        className="text-white text-xl absolute left-[50%] translate-x-[-50%] top-[45%]"
      >
        Alessandro Milos
      </p>
      <p
        style={textShadow}
        className="text-white text-xs absolute left-[50%] translate-x-[-50%] top-[55%]"
      >
        {text.clickToContinue[language]}
      </p>
    </div>
  );
};

export default LoginMac;
