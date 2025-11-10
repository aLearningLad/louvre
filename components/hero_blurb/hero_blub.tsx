"use client";

import { landing_links } from "@/dev_data/landing_links";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const HeroBlurb = () => {
  const firstRef = useRef<HTMLHeadingElement>(null);
  const secondRef = useRef<HTMLHeadingElement>(null);
  const thirdRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const firstValue = SplitText.create(firstRef.current, {
      type: "words, chars",
    });
    const secondValue = SplitText.create(secondRef.current, {
      type: "words, chars",
    });
    const thirdValue = SplitText.create(thirdRef.current, {
      type: "words, chars",
    });

    gsap.set(firstValue.chars, { x: 100, autoAlpha: 0 });
    gsap.set(firstRef.current, { visibility: "visible" });
    gsap.set(secondValue.chars, { x: -70, autoAlpha: 0 });
    gsap.set(secondRef.current, { visibility: "visible" });
    gsap.set(thirdValue.chars, { x: -70, autoAlpha: 0 });
    gsap.set(thirdRef.current, { visibility: "visible" });

    gsap.to(firstValue.chars, {
      delay: 1.5,
      duration: 1,
      x: 0,
      autoAlpha: 1,
      stagger: 0.05,
    });
    gsap.to(secondValue.chars, {
      duration: 1,
      x: 0,
      autoAlpha: 1,
      stagger: 0.1,
    });
    gsap.to(thirdValue.chars, {
      duration: 2,
      delay: 2,
      x: 0,
      autoAlpha: 1,
      stagger: 0.1,
    });
  });
  return (
    <div className=" w-full lg:w-7/12 h-fit flex flex-col text-center lg:text-start">
      <h1 ref={secondRef} className=" text-3xl lg:text-3xl hello">
        Hello, {"I'm"} Thato,
      </h1>
      <h1 ref={firstRef} className=" text-3xl lg:text-3xl stack">
        a full-stack developer
      </h1>
      <h1 ref={thirdRef} className=" text-3xl lg:text-3xl hello">
        located in Cape Town
      </h1>
      <h3 className=" text-xl lg:text-[16px] ">
        I build, deploy & document full-stack systems
      </h3>
      <span className=" w-full mt-4 hidden lg:flex justify-start gap-5 ">
        {landing_links.map(({ icon, id, link, target, text }, index) => (
          <Link
            className={` flex ${
              id === 11 ? "github" : "project"
            } hover:scale-90 hover:bg-white hover:text-black transition-all duration-200 ease-in-out rounded-[6px] items-center justify-center gap-1 px-5 lg:px-7 h-16 lg:h-12 bg-neutral-400/20`}
            key={id}
            href={link}
            target={target}
          >
            <p className=" text-[14px] ">{text}</p>
            {icon}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default HeroBlurb;
