import { FaGithub } from "react-icons/fa";
import { GiGears } from "react-icons/gi";

export const landing_links: T_landing_links[] = [
  {
    id: 11,
    text: "Github",
    icon: <FaGithub size={26} />,
    link: "https://github.com/aLearningLad",
    target: "_blank",
  },
  {
    id: 22,
    text: "Projects",
    icon: <GiGears size={26} />,
    link: "/projects",
    target: "_self",
  },
];
