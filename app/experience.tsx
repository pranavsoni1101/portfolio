import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "Intellore Systems Pvt. Ltd.",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            As a Software Developer at Intellore Systems since June 2024, I have
            led the development and deployment of a compliance management web
            application on AWS, utilizing the MERN stack. My contributions have
            significantly improved efficiency and application stability.
          </p>

          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Reduced deployment time by 25% with a CI/CD pipeline using
              Jenkins and Docker.
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Achieved 4-6x faster processing with a Flask API for
              HTML-to-DOCX conversion.
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Improved application stability by 40% by resolving over 30
              critical bugs.
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Reduced technical debt by 22% using SonarQube.
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Lowered query execution time by 35% through PostgreSQL schema
              optimization.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Kcloud Technologies",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            From January to May 2024, I architected a document signing
            application with a scalable Service-Oriented Architecture. I was
            also responsible for the successful deployment and maintenance of
            MERN stack web applications on AWS EC2 instances and coordinated
            multiple projects using Agile methodologies.
          </p>
        </div>
      ),
    },
    {
      title: "PureSoftware",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            During my time at PureSoftware from February to November 2023, I
            contributed to the Agile development of 'FocusFlow', a web
            application designed to enhance workplace efficiency through precise
            task tracking, applying Object-Oriented Programming principles. I
            also played a key role in seamlessly integrating the backend and
            frontend, which optimized performance by leveraging RDBMS
            principles.
          </p>
        </div>
      ),
    },
    {
      title: "Zygoma AI",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            As a freelance Webmaster for Zygoma AI from January to July 2023 , I
            designed, developed, and deployed a website focused on medical data
            annotation and labeling services. By integrating Strapi CMS with
            GraphQL, I reduced redeployment time by 40% and implemented
            optimization strategies for responsive and SEO-ready web pages.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
