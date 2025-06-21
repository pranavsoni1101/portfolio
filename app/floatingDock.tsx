import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrain,
  IconBuildingSkyscraper,
  IconAddressBook,
  IconBriefcase,
} from "@tabler/icons-react";

export function FloatingDockNav() {
  const links = [
    {
      title: "About",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Experience",
      icon: (
        <IconBuildingSkyscraper className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Skills",
      icon: (
        <IconBrain className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
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
