import { FcMoneyTransfer } from "react-icons/fc";

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
    category: "Full Stack", // create enum --> 'full stack', 'frontend', 'API'
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
    next_project_link: "/#eventstream",
  },
];
