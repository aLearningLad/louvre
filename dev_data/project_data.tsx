import { enums } from "@/enums";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsServer } from "react-icons/bs";

export const project_data: T_individual_project[] = [
  {
    id: "platamigos",
    img1: "",
    img2: "",
    img3: "",
    subtitle_icon: <FcMoneyTransfer size={14} />,
    video_url: "",
    title: "Platamigos",
    subtitle: "A demo peer-lending platform",
    category: enums.FLS,
    par1: "Users can request loans, compare offers, and choose which toaccept.",
    par2: `User has the choice to either become a debtor, a creditor, or
                both. Debt balances, credit score and accrued income are all
                calculated and shown`,
    lesson_par1: `                    I learned how to think about caching. What, when and how to
                    cache. I decided to forgo Next.js's built-in caching in
                    favor of Redis, and learned to implement Upstash and call it
                    during auth and CRUD events: fetch and cache on sign in and
                    loan-related changes; clear on sign out.
`,
    lesson_par2: `                    I also learned valuable lessons pertaining to
                    normalizing data. No duplication, no redundant entries.
                    Indexing and joining.
`,
    github_url: "https://github.com/aLearningLad/platamigos",
    live_link: "#",
    tech_upper: [],
    tech_lower: [],
    next_project_link: "/projects/#eventstream",
  },
  {
    id: "eventstream",
    img1: "",
    img2: "",
    img3: "",
    subtitle_icon: <BsServer size={14} />,
    video_url: "",
    title: "EventStream API",
    subtitle: "Distributed Festival Management API",
    category: enums.API, // create enum --> 'full stack', 'frontend', 'API'
    par1: "Party organizers create events and manage promotional media, pricing, attendance, ticket sales, waitlisting and more.",
    par2: `User can sign up as either an organizer or attendee. Each has unique routes separated by role-based access`,
    lesson_par1: `I learned about (and implemented) queuing through Kafka, a vital component for systems that could handle 10x, 100x, and even 1000x more requests as it's user base grows.
`,
    lesson_par2: `                    I also learned how to use SQL and NoSQL databases concurrently, to store fundementally sets different data. PostgreSQL, MongoDB and AWS S3
`,
    github_url: "https://github.com/aLearningLad/platamigos",
    live_link: "#",
    tech_upper: [],
    tech_lower: [],
    next_project_link: "#",
  },
];
