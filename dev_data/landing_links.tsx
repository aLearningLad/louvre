import { FaGithub } from "react-icons/fa";
import { GiGears } from "react-icons/gi";

export const landing_links: T_landing_links[] = [
  {
    id: 11,
    text: "Github",
    icon: <FaGithub />,
    link: "https://github.com/aLearningLad/louvre",
    target: "_blank",
  },
  {
    id: 22,
    text: "Projects",
    icon: <GiGears />,
    link: "/projects",
    target: "_self",
  },
];
