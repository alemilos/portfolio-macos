// Flyers
import adsbImg from "../assets/projects/adsb/flyer.png";
import osmtilesImg from "../assets/projects/osmtilesdownloader/flyer.png";
import portfolioImg from "../assets/projects/portfolio/flyer.png";

// Icons
import { icons } from "./icons";

export const STATUSES = {
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  IDEA: "IDEA",
};

const techs = {
  react: { name: "React", icon: icons.technologies.react },
  javascript: { name: "Javascript", icon: icons.technologies.javascript },
  css: { name: "CSS", icon: icons.technologies.css },
  html: { name: "Html", icon: icons.technologies.html },
  vite: { name: "Vite", icon: icons.technologies.vite },
  nodejs: { name: "Nodejs", icon: icons.technologies.nodejs },
  python: { name: "Python", icon: icons.technologies.python },
  firebase: { name: "Firebase", icon: icons.technologies.firebase },
};

const libs = {
  leaflet: { name: "Leaflet", icon: icons.libraries.leaflet },
  axios: { name: "Axios", icon: icons.libraries.axios },
  apexcharts: { name: "Apexcharts", icon: icons.libraries.apexcharts },
  chartjs: { name: "Chartjs", icon: icons.libraries.chartjs },
  mqtt: { name: "Mqtt", icon: icons.libraries.mqtt },
  websockets: { name: "WebSockets", icon: icons.libraries.websockets },
  cliprogress: { name: "Cli-Progress", icon: icons.libraries.cliprogress },
  minimist: { name: "Minimist", icon: icons.libraries.minimist },
  tailwind: { name: "Tailwind", icon: icons.libraries.tailwind },
};

export const PROJECTS = [
  {
    name: "ADS-B Project",
    route: "adsb",
    flyer: adsbImg,
    link: null,
    status: STATUSES.IN_PROGRESS,
    description: {
      it: "Un'applicazione web...",
      en: "A webapp made to create a visual interface for civil air traffic data.",
    },
    technologies: [techs.react, techs.javascript, techs.css, techs.vite],
    libraries: [
      libs.leaflet,
      libs.axios,
      libs.apexcharts,
      libs.chartjs,
      libs.mqtt,
      libs.websockets,
    ],
  },
  {
    name: "OSM Tiles Downloader",
    route: "osmtilesdownloader",
    status: STATUSES.COMPLETED,
    flyer: osmtilesImg,
    link: { github: "https://github.com/AleMilos/osm-tiles-downloader.git" },
    description: {
      it: "Un programma CLI...",
      en: "A CLI program made to download osm map tiles for Leaflet",
    },
    technologies: [techs.nodejs, techs.python],
    libraries: [libs.axios, libs.cliprogress, libs.minimist],
  },
  {
    name: "Portfolio",
    route: "portfolio",
    status: STATUSES.IN_PROGRESS,
    flyer: portfolioImg,
    link: null,
    description: {
      it: "Un'applicazione web...",
      en: "This own portfolio",
    },
    technologies: [techs.react, techs.firebase, techs.vite, techs.css],
    libraries: [libs.axios, libs.tailwind],
  },
];
