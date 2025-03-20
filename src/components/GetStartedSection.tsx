"use client";
import React from "react";
import {
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import {useScroll} from "@/hooks/useScroll";
interface Item {
  title: string;
  desc: string;
  icon: React.ReactNode;
}
const items: Item[] = [
  {
    icon: <ClipboardDocumentListIcon className="w-8 h-8" />,
    title: "1. Fill Out Application",
    desc: "Complete our simple online application form.",
  },
  {
    icon: <CheckCircleIcon className="w-8 h-8" />,
    title: "2. Get Pre-Qualified",
    desc: "Quick review of your details and credentials.",
  },
  {
    icon: <BriefcaseIcon className="w-8 h-8" />,
    title: "3. Start Getting Jobs",
    desc: "Once approved, we will send you job opportunities.",
  },
];

const GetStartedSection = () => {
  const { scrollToBlock } = useScroll();
  return (
    <section className={"text-center mb-14 md:mb-24"}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10">
          How to Get Started
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {items.map(({ title, desc, icon }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 text-blue-500">
                {icon}
              </div>
              <h4 className="text-blue-900 mb-3 font-bold text-xl">{title}</h4>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollToBlock("sectionJobApp")}
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default GetStartedSection;
