"use client";
import React from "react";
import workItems from "../data/workItems.json";
import WorkItem from "@/components/WorkItem";
import {useScroll} from "@/hooks/useScroll";

const JoinUsSection = () => {
  const { scrollToBlock } = useScroll();
  return (
    <section className="py-10 md:pt-12 md:pb-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-12 text-center">
          Why Work With Us?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {workItems.map(({ title, description, icon }, index) => (
            <WorkItem
              key={index}
              title={title}
              desc={description}
              icon={icon}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => scrollToBlock("sectionJobApp")}
            className="cursor-pointer bg-blue-600 font-bold text-white px-6 py-3 rounded-lg
              hover:bg-blue-700 transition-colors
              shadow-md hover:shadow-lg"
          >
            Apply Now - Get Pre-Qualified
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
