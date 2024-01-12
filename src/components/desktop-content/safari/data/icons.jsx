// React Icons
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiLeaflet } from "react-icons/si";
import { SiMqtt } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { MdQuestionMark } from "react-icons/md";

// Pngs
import apexcharts from "../assets/icons/apexcharts.png";
import chartjs from "../assets/icons/chartjs.png";
import highcharts from "../assets/icons/highcharts.svg";
import websockets from "../assets/icons/websockets.png";

export const icons = {
  technologies: {
    react: <FaReact />,
    javascript: <IoLogoJavascript />,
    css: <FaCss3Alt />,
    html: <FaHtml5 />,
    vite: <SiVite />,
    nodejs: <FaNode />,
    python: <FaPython />,
    firebase: <IoLogoFirebase />,
  },
  libraries: {
    leaflet: <SiLeaflet />,
    mqtt: <SiMqtt />,
    axios: <SiAxios />,
    apexcharts: `url(${apexcharts})`,
    chartjs: `url(${chartjs})`,
    highcharts: `url(${highcharts})`,
    cliprogress: <MdQuestionMark />,
    minimist: <MdQuestionMark />,
    websockets: `url(${websockets})`,
    tailwind: <SiTailwindcss />,
  },
};
