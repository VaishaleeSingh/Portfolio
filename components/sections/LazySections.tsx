"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/About"));
const Education = dynamic(() => import("@/components/sections/Education"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const AdditionalInfo = dynamic(() => import("@/components/sections/AdditionalInfo"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function LazySections() {
  return (
    <div className="pb-10 sm:pb-14 md:pb-16 lg:pb-20">
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <AdditionalInfo />
      <Contact />
    </div>
  );
}
