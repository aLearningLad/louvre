import { I_project_card } from "@/interfaces";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";

const ProjectSection =
  // :

  // React.FC<I_project_card>

  (
    {
      //   desc,
      //   id,
      //   img1,
      //   img2,
      //   img3,
      //   repo_link,
      //   subtitle,
      //   tech_stack,
      //   title,
      //   video_link,
      //   live_link,
    }
  ) => {
    return (
      <section className=" p-2 h-screen w-full flex justify-center items-center flex-col">
        {/* project info */}
        <div className=" w-full gap-3 lg:w-8/12 flex flex-col lg:flex-row h-[70%] lg:h-[65%]">
          {/* left side images --> ONLY ON LARGE SCREENS */}
          <div className=" hidden lg:flex w-3/12 h-full flex-col items-end bg-neutral-100/30 rounded-l-2xl"></div>

          {/* middle video demo */}
          <div className=" w-full sm:w-10/12 md:w-8/12 w:h-7/12 bg-neutral-100/10 rounded-lg"></div>

          {/* right side info / bottom on mobile  */}
          <div className=" w-full lg:w-5/12 h-full rounded-2xl flex-col items-center text-center lg:text-start lg:items-start">
            <span className="  flex items-center gap-1 ">
              <i className="text-[14px]">Platamigos</i>
              <p className=" text-[6px] w-fit h-fit px-1 py-1 bg-teal-600 rounded-[4px] ">
                Full Stack
              </p>
            </span>
            <h4 className=" text-[12px] flex gap-[2px]">
              A demo peer-lending platform <FcMoneyTransfer size={14} />
            </h4>
            <div>
              <div className=" text-[10px] w-full md:w-11/12">
                Users can request loans, compare offers, and choose which to
                accept.
                <br />
                <br />
                User has the choice to either become a debtor, a creditor, or
                both. Debt balances, credit score and accrued income are all
                calculated and shown
                <br />
                <br />
                <div className=" w-full flex flex-col items-start gap-2">
                  <p className=" text-[10px] font-semibold flex gap-[2px]">
                    Main lesson <GiBrain size={12} color="pink" /> :
                  </p>
                  <p className=" text-[10px]">
                    I learned how to think about caching. What, when and how to
                    cache. I decided to forgo Next.js's built-in caching in
                    favor of Redis, and learned to implement Upstash and call it
                    during auth and CRUD events: fetch and cache on sign in and
                    rloan-related changes; clear on sign out.
                    <br />
                    <br />I also learned valuable lessons pertaining to
                    normalizing data. No duplication, no redundant entries.
                    Indexing and joining.
                  </p>
                </div>
              </div>
              <div className=" w-full h-full flex justify-start items-center gap-3 mt-5">
                <Link
                  href={"https://github.com/aLearningLad/platamigos"}
                  target="_blank"
                  className=" text-[12px] text-black hover:text-white cursor-pointer hover:bg-black transition-all duration-300 ease-in-out hover:scale-95  flex items-center justify-center w-fit px-5 h-6 rounded-[4px] bg-neutral-100 "
                >
                  <FaGithub size={18} />
                </Link>

                <Link
                  href={"#"}
                  className=" text-[12px] flex items-center justify-center w-fit px-5 h-6 rounded-[4px] bg-neutral-100 hover:bg-black hover:text-white text-black transition-all duration-300 ease-in-out cursor-pointer hover:scale-95 "
                >
                  Open
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* tech stack details */}
        <div className=" w-full h-[30%] lg:h-[25%] border-2 border-white "></div>
        {/* cta to scroll down ONLY ON LARGE SCREENS */}
        <div className=" w-full hidden lg:flex h-[10%] border-2 border-white  "></div>
      </section>
    );
  };

export default ProjectSection;
