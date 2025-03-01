/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TbBrandVscode,
  TbCloudComputing,
  TbHome2,
  TbStack2,
} from "react-icons/tb";

type Project = {
  label: string;
  Svg: any;
  pathName: string;
};

export const Menu: Array<Project> = [
  {
    label: "Home",
    Svg: TbHome2,
    pathName: "/#home",
  },
  {
    label: "About",
    Svg: TbCloudComputing,
    pathName: "/#about",
  },
  {
    label: "Skills",
    Svg: TbBrandVscode,
    pathName: "/#skills",
  },
  {
    label: "All Projects",
    Svg: TbStack2,
    pathName: "/all-projects",
  },
];
