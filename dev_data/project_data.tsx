import { enums } from "@/enums";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsServer } from "react-icons/bs";
import { FaMobileScreenButton } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import Image from "next/image";
import MongoTab from "@/components/projects/project_showcases/stack_tabs/mongo_tab";
import SQLTab from "@/components/projects/project_showcases/stack_tabs/sql_tab";
import TypescriptTab from "@/components/projects/project_showcases/stack_tabs/typescript_tab";
import TailwindTab from "@/components/projects/project_showcases/stack_tabs/tailwind_tab";
import NextjsTab from "@/components/projects/project_showcases/stack_tabs/nextjs_tab";
import RedisTab from "@/components/projects/project_showcases/stack_tabs/redis_tab";
import Upstash_Tab from "@/components/projects/project_showcases/stack_tabs/upstash_tab";
import GSAPTab from "@/components/projects/project_showcases/stack_tabs/gsap_tab";
import KafkaTab from "@/components/projects/project_showcases/stack_tabs/kafka_tab";
import S3Tab from "@/components/projects/project_showcases/stack_tabs/s3_tab";
import DockerTab from "@/components/projects/project_showcases/stack_tabs/docker_tab";
import NodeTab from "@/components/projects/project_showcases/stack_tabs/node_tab";
import BcryptTab from "@/components/projects/project_showcases/stack_tabs/bcrypt_tab";
import PostmanTab from "@/components/projects/project_showcases/stack_tabs/postman_tab";
import DotnetTab from "@/components/projects/project_showcases/stack_tabs/dotnet_tab";
import MSSQLTab from "@/components/projects/project_showcases/stack_tabs/mssql_tab";
import SeesharpTab from "@/components/projects/project_showcases/stack_tabs/seesharp_tab";
import JWTTab from "@/components/projects/project_showcases/stack_tabs/jwt_tab";

export const project_data: T_individual_project[] = [
  {
    is_type: enums.FLS,
    id: "platamigos",
    img1: "",
    img2: "",
    img3: "",
    subtitle_icon: <FcMoneyTransfer size={14} />,
    video_url: "",
    title: "Platamigos",
    subtitle: "A demo peer-lending platform",
    category1: enums.FLS,
    par1: "Users can request loans, compare offers, and choose which to accept.",
    par2: `User has the choice to either become a debtor, a creditor, or
                both. Debt balances, credit score and accrued income are all
                calculated and shown`,
    lesson_par1: `                   Caching! What, when & how to
                    cache. I used Redis & Upstash during
                    during auth and CRUD events: fetch and cache on sign in and
                    loan-related changes; clear on sign out.
`,
    lesson_par2: `                    I also learned valuable lessons on
                    normalizing data. No duplication nor redundant entries, and clean
                    ndexing and joining.
`,
    github_url: "https://github.com/aLearningLad/platamigos",
    live_link: "#",
    tech_upper: [
      <SQLTab key={1} />,
      <Upstash_Tab key={6} />,
      <RedisTab key={2} />,
      <TypescriptTab key={3} />,
    ],
    tech_lower: [
      <TailwindTab key={4} />,
      <NextjsTab key={5} />,
      <GSAPTab key={7} />,
    ],
    next_project_link: "/projects/#eventstream",
    next_project_name: "EventStream API",
  },
  {
    is_type: enums.API,

    id: "eventstream",
    img1: "",
    img2: "",
    img3: "",
    subtitle_icon: <BsServer size={14} />,
    video_url: "",
    title: "EventStream API",
    subtitle: "Distributed Festival Management API",
    category1: enums.API, // create enum --> 'full stack', 'frontend', 'API'
    par1: "Party organizers create events and manage promotional media, pricing, attendance, ticket sales, waitlisting and more.",
    par2: `User can sign up as either an organizer or attendee. Each has unique routes determined by role`,
    lesson_par1: `I learned about (and implemented) queuing through Kafka, a vital component for systems that could handle 10x, 100x, and even 1000x more requests as it's user base grows.
  `,
    lesson_par2: `                    I also learned how to use SQL and NoSQL databases concurrently, to store different sets of data. PostgreSQL for core event data, MongoDB for metadata and AWS S3 for media files
  `,
    github_url: "https://github.com/aLearningLad/eventstream",
    live_link: "#",
    tech_upper: [
      <KafkaTab key={11} />,
      <MongoTab key={12} />,
      <S3Tab key={13} />,
      <DockerTab key={14} />,
      <SQLTab key={15} />,
    ],
    tech_lower: [
      <NodeTab key={16} />,
      <BcryptTab key={17} />,
      <PostmanTab key={18} />,
    ],
    next_project_link: "#",
    next_project_name: "RoadWalks API",
  },
  {
    is_type: enums.API,
    id: "roadworks",
    img1: "",
    img2: "",
    img3: "",
    subtitle_icon: <BsServer size={14} />,
    video_url: "",
    title: "RoadWork Club API",
    subtitle: "Running Routes for Kraaifontein Clubs",
    category1: enums.API, // create enum --> 'full stack', 'frontend', 'API'
    par1: `A super-simple, structured .NET API built for Kraaifontein running clubs, boxers, and soccer players
      `,
    par2: `It surfaces rich route data with stopovers, landmarks, & average durations for each route.
      Every route includes suggestions for branching offshoots to dynamically extend
       runs through alternative terrain & scenery.`,
    par3: `Routes are available all users, but only
      registered users can add route data.
      Additionally, users can only edit a route they created`, // ----> add this to Github README instead
    lesson_par1: `I developed a solid grasp of navigational properties inside C# classes.
  `,
    lesson_par2: `I learned how to implement the repository pattern, and the importance of separating Domain Models from Data Transfer Objects,
      along with increasing my confidence in using LINQ for queries
  `,
    github_url: "https://github.com/aLearningLad/RoadWorkClub",
    live_link: "#",
    tech_upper: [
      <DotnetTab key={111} />,
      <MSSQLTab key={222} />,

      <JWTTab key={444} />,
    ],
    tech_lower: [<SeesharpTab key={333} />],
    next_project_link: "#",
    next_project_name: "hiatus",
  },
  //   {
  //     id: "codeRume",
  //     img1: "",
  //     img2: "",
  //     img3: "",
  //     subtitle_icon: <GiTeamIdea size={14} />,
  //     video_url: "",
  //     title: "codeRume",
  //     subtitle: "Live Coding Collaboration Platform",
  //     category1: enums.FLS, // create enum --> 'full stack', 'frontend', 'API'
  //     category2: enums.RLT, // create enum --> 'full stack', 'frontend', 'API'
  //     par1: `A lightweight coding collaboration app built for rookies and savants to intermingle, learn together and share.
  //     `,
  //     par2: `Users collaborate on a single integrated development environment in real time and can raise discussions in their chat`,
  //     lesson_par1: `Because of Next.js's serverless architecture, I learned to integrate realtime communication without relying on socket.io nor a traditional Node.js server
  // `,

  //     github_url: "https://github.com/aLearningLad/coderumeV2",
  //     live_link: "#",
  //     tech_upper: [],
  //     tech_lower: [],
  //     next_project_link: "#",
  //     next_project_name: "Twitterverse",
  //   },
  //   {
  //     id: "twitterverse",
  //     img1: "",
  //     img2: "",
  //     img3: "",
  //     subtitle_icon: <GiTeamIdea size={14} />,
  //     video_url: "",
  //     title: "Twitterverse",
  //     subtitle: "Twitter Frontend Clone",
  //     category1: enums.FRN, // create enum --> 'full stack', 'frontend', 'API'
  //     par1: `This is a tiny hobby project I built two years ago, just after Twitter was renamed to X.com
  //     `,
  //     lesson_par1: `I tried to mimic Twitter's UI and basic functionality such as tweeting, viewing community tweets, news sections, applying for premium membership; and storing, altering and using state across different components to manipulate the UI.
  // `,

  //     github_url: "https://github.com/aLearningLad/twitterverse",
  //     live_link: "#",
  //     tech_upper: [],
  //     tech_lower: [],
  //   },
];
