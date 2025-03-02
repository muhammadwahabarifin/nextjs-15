import { RiNextjsFill } from "react-icons/ri";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiSanity,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Icon = {
  SvgIcon: unknown;
  title: string;
  class: string;
  text: string;
  BgClass: string;
};

type Project = {
  title: string;
  description: string;
  urlDirect: string;
  srcImage: string;
  icons: Array<Icon>;
  text?: string;
  BgClass?: string;
};

export const Projects: Array<Project> = [
  {
    title: "Aoshi Platform",
    description: "Aoshi-AI is the link management platform for businesses.",
    urlDirect: "https://fiqtor.xyz",
    srcImage: "/project/project1.png",
    icons: [
      {
        SvgIcon: RiNextjsFill,
        title: "NextJS",
        class: "fill-white",
        text: "NextJS",
        BgClass: "#030712",
      },
      {
        SvgIcon: SiShadcnui,
        title: "ShadcnUI",
        class: "fill-white ",
        text: "ShadcnUI",
        BgClass: "#09090b",
      },
      {
        SvgIcon: SiTypescript,
        title: "Typescript",
        class: "fill-blue-400 rounded",
        text: "Typescript",
        BgClass: "#172554",
      },
      {
        SvgIcon: SiTailwindcss,
        title: "TailwindCSS",
        class: "fill-blue-400",
        text: "TailwindCSS",
        BgClass: "#0f676d",
      },
    ],
  },
  {
    title: "Evara ",
    description:
      "Create a website for e-commerce that sells products using a database.",
    urlDirect: "https://lunar-ux.vercel.app",
    srcImage: "/project/project2.png",
    icons: [
      {
        SvgIcon: SiHtml5,
        title: "HTML5",
        class: "fill-orange-400",
        text: "HTML5",
        BgClass: "#eb5000",
      },
      {
        SvgIcon: SiCss3,
        title: "CSS3",
        class: "fill-blue-400",
        text: "CSS3",
        BgClass: "#172554",
      },
      {
        SvgIcon: SiJavascript,
        title: "Javascript",
        class: "fill-yellow-300",
        text: "Javascript",
        BgClass: "#cca818",
      },
    ],
  },
  {
    title: "Liquid Hotel",
    description:
      "Beautiful and Luxury Hotels in Bali with Exclusive Restaurants.",
    urlDirect: "https://hardware-harmony.vercel.app",
    srcImage: "/project/project3.png",
    icons: [
      {
        SvgIcon: RiNextjsFill,
        title: "NextJS",
        class: "fill-white",
        text: "NextJS",
        BgClass: "#030712",
      },
      {
        SvgIcon: SiTypescript,
        title: "Typescript",
        class: "fill-blue-400 rounded",
        text: "Typescript",
        BgClass: "#172554",
      },
      {
        SvgIcon: SiExpress,
        title: "ExpressJS",
        class: "fill-black",
        text: "ExpressJS",
        BgClass: "#2ea971",
      },
      {
        SvgIcon: SiTailwindcss,
        title: "TailwindCSS",
        class: "fill-blue-400",
        text: "TailwindCSS",
        BgClass: "#0f676d",
      },
    ],
  },
  {
    title: "Launch UI",
    description:
      "Creating a website using a database makes your website feel premium.",
    urlDirect: "https://hardware-harmony.vercel.app",
    srcImage: "/project/project5.png",
    icons: [
      {
        SvgIcon: RiNextjsFill,
        title: "NextJS",
        class: "fill-white",
        text: "NextJS",
        BgClass: "#030712",
      },
      {
        SvgIcon: SiTypescript,
        title: "Typescript",
        class: "fill-blue-400 rounded",
        text: "Typescript",
        BgClass: "#172554",
      },
      {
        SvgIcon: SiMongodb,
        title: "ExpressJS",
        class: "fill-green-400",
        text: "MongoDB",
        BgClass: "#2ea971",
      },
      {
        SvgIcon: SiSanity,
        title: "Sanity",
        class: "fill-orange-300",
        text: "SanityIO",
        BgClass: "#c2410c",
      },
    ],
  },
];
