"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrain,
  IconBuildingSkyscraper,
  IconAddressBook,
  IconBriefcase,
} from "@tabler/icons-react";
import { useRouter, usePathname } from "next/navigation"; // Import from 'next/navigation' for App Router

export function FloatingDockNav() {
  const router = useRouter();
  // const pathname = usePathname(); // Get the current path from the URL

  const handleNavLinkClick = (sectionId: string): void => {
    // 1. Scroll to the section first
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // 2. Update the URL in the browser's address bar WITHOUT causing a full page navigation or 404
    // This gives you the clean URL (e.g., /about)
    // window.history.pushState(state, unused, URL);
    window.history.pushState(null, '', `/${sectionId}`);
  };

  const links = [
    {
      title: "About",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
      onClick: () => handleNavLinkClick("about")
    },

    {
      title: "Experience",
      icon: (
        <IconBuildingSkyscraper className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
      onClick: () => handleNavLinkClick("experience")
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
      onClick: () => handleNavLinkClick("projects")
    },
    {
      title: "Skills",
      icon: (
        <IconBrain className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
      onClick: () => handleNavLinkClick("skills")
    },
  ];
  return (
    <div className="fixed inset-x-0 bottom-8 z-50 flex justify-center">
      <FloatingDock
        mobileClassName="left-0" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
