import {
  SiCss3,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Icon = {
  SvgIcon: unknown;
  title: string;
  class: string;
  text: string;
};

type Project = {
  title: string;
  description: string;
  urlDirect: string;
  srcImage: string;
  icons: Array<Icon>;
  text?: string;
};

export const Projects: Array<Project> = [
  {
    title: "Personal Website",
    description: "I created personal website for my portfolio.",
    urlDirect: "https://fiqtor.xyz",
    srcImage: "/project/project1.png",
    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: "NextJS",
        class: "fill-black",
        text: "NextJS",
      },
      {
        SvgIcon: SiShadcnui,
        title: "ShadcnUI",
        class: "fill-black ",
        text: "ShadcnUI",
      },
      {
        SvgIcon: SiTypescript,
        title: "Typescript",
        class: "fill-blue-800 rounded",
        text: "Typescript",
      },
      {
        SvgIcon: SiTailwindcss,
        title: "TailwindCSS",
        class: "fill-blue-400",
        text: "TailwindCSS",
      },
    ],
  },
  {
    title: "Lunar UX",
    description: "I created a website for a company that sells services.",
    urlDirect: "https://lunar-ux.vercel.app",
    srcImage: "/project/project2.png",
    icons: [
      {
        SvgIcon: SiHtml5,
        title: "HTML5",
        class: "fill-orange-500",
        text: "HTML5",
      },
      {
        SvgIcon: SiCss3,
        title: "CSS3",
        class: "fill-blue-400",
        text: "CSS3",
      },
      {
        SvgIcon: SiJavascript,
        title: "Javascript",
        class: "fill-yellow-300",
        text: "Javascript",
      },
    ],
  },
  {
    title: "Hardware Harmony",
    description:
      "I created a website for a e-commerce that sells products without database.",
    urlDirect: "https://hardware-harmony.vercel.app",
    srcImage: "/project/project3.png",
    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: "NextJS",
        class: "fill-black",
        text: "NextJS",
      },
      {
        SvgIcon: SiFramer,
        title: "FramerMotion",
        class: "fill-black",
        text: "FramerMotion",
      },
      {
        SvgIcon: SiTypescript,
        title: "Typescript",
        class: "fill-blue-800 rounded",
        text: "Typescript",
      },
    ],
  },
];
