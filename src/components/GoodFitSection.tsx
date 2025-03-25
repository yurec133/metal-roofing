"use client";
import React from "react";
import { Shield } from "lucide-react";
import {useScroll} from "@/hooks/useScroll";

const criteria = [
  "Licensed & insured roofing subcontractors",
  "Experience with labor-only or supply & install (we prefer those who can do both)",
  "Reliable team with high-quality workmanship",
  "Able to complete jobs on schedule",
  "Open to working with insurance builders & large-scale projects",
];

const GoodFitSection = () => {
  const { scrollToBlock } = useScroll();
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <section className="bg-gray-50 py-8 md:py-12 px-4 rounded-2xl text-center mb-14 md:mb-28">
        <div className="max-w-[38rem] mx-auto">
          <div className="flex justify-center mb-4">
            <Shield className="w-14 h-14 text-blue-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
            Are You a Good Fit?
          </h3>
          <p className="text-gray-600 mb-9">
            We're looking for skilled metal roofing subcontractors across
            Australia who meet
            <br /> the following criteria:
          </p>
          <ul className="space-y-4 mb-10">
            {criteria.map((item, index) => (
              <li
                key={index}
                className="bg-white shadow-md rounded-lg py-3 px-5 text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollToBlock("sectionJobApp")}
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Apply Now – Join the Network
          </button>
        </div>
      </section>
    </div>
  );
};

export default GoodFitSection;
