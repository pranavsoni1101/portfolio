import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// --- Import all your segregated icons here ---
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaGitAlt } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { FaWindows } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { SiMysql, SiMacos } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaAws } from "react-icons/fa6";
import { FaGithub, FaGitlab } from "react-icons/fa";

// --- Define the content for each grid item ---
const items = [
  {
    title: "Full-Stack Development",
    description:
      "Building scalable and efficient solutions with modern frontend and backend technologies.",
    className: "md:col-span-2 md:row-span-2",
    header: (
      // This container has enough space, so no changes are needed here.
      <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex flex-col justify-center items-center p-4">
        <div className="flex flex-row items-center gap-4">
          <FaReact className="h-12 w-12 text-[#61DAFB]" />
          <FaNodeJs className="h-12 w-12 text-[#68A063]" />
        </div>
        <div className="flex flex-row items-center gap-4 mt-4">
          <IoLogoJavascript className="h-8 w-8 text-[#F7DF1E]" />
          <BiLogoTypescript className="h-8 w-8 text-[#3178C6]" />
          <RiNextjsFill className="h-8 w-8 dark:text-white" />
        </div>
      </div>
    ),
  },
  {
    title: "Backend & APIs",
    description:
      "Proficient in Python and Java to develop diverse backend services and RESTful APIs.",
    className: "md:col-span-1",
    header: (
      // FIX: Added 'flex-wrap' and reduced icon size from h-10 to h-9
      <div className="flex-1 w-full h-full min-h-[4rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex flex-wrap justify-center items-center gap-4">
        <FaPython className="h-8 w-8 text-[#3776AB]" />
        <FaJava className="h-8 w-8 text-[#007396]" />
        <TbBrandCpp className="h-8 w-8 text-[#3776AB]" />
      </div>
    ),
  },
  {
    title: "Databases",
    description:
      "Designing schemas and writing optimized queries for both SQL and NoSQL databases.",
    className: "md:col-span-1",
    header: (
      // FIX: Added 'flex-wrap' and reduced icon size from h-10 to h-9
      <div className="flex-1 w-full h-full min-h-[4rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex flex-wrap justify-center items-center gap-4">
        <BiLogoPostgresql className="h-8 w-8 text-[#4169E1]" />
        <SiMongodb className="h-8 w-8 text-[#47A248]" />
        <IoLogoFirebase className="h-8 w-8 text-[#FFCA28]" />
        <SiMysql className="h-8 w-8 text-[#4479A1]" />
      </div>
    ),
  },
  {
    title: "DevOps & Cloud Deployment",
    description:
      "Deploying applications on AWS and building CI/CD pipelines with Docker.",
    className: "md:col-span-1",
    header: (
      // This container has enough space, but adding flex-wrap is good practice.
      <div className="flex-1 w-full h-full min-h-[4rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex flex-wrap justify-center items-center gap-4">
        <FaAws className="h-9 w-9 text-[#FF9900]" />
        <FaDocker className="h-9 w-9 text-[#2496ED]" />
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "Experienced with Git-based platforms for collaborative development.",
    className: "md:col-span-1",
    header: (
      // FIX: Added 'flex-wrap' and reduced icon size from h-10 to h-9
      <div className="flex-1 w-full h-full min-h-[4rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex flex-wrap justify-center items-center gap-4">
        <FaGithub className="h-8 w-8 dark:text-white" />
        <FaGitAlt className="h-8 w-8 text-[#F05032]" />
        <FaGitlab className="h-8 w-8 text-[#FCA121]" />
      </div>
    ),
  },
  {
    title: "System Proficiency",
    description: "Comfortable developing across multiple operating systems.",
    className: "md:col-span-1",
    header: (
      // FIX: Added 'flex-wrap' and reduced icon size from h-10 to h-9
      <div className="flex-1 w-full h-full min-h-[4rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex flex-wrap justify-center items-center gap-4">
        <FaLinux className="h-9 w-9" />
        <FaWindows className="h-9 w-9 text-[#0078D6]" />
        <SiMacos className="h-9 w-9" />
      </div>
    ),
  },
];

export default function Skills() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          ⚙️ Tools of the Trade
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-xl">
          These are the platforms and technologies I rely on to deliver quality
          software
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[12rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </>
  );
}
