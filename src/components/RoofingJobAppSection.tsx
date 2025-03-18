import React from "react";
import MultiStepForm from "@/components/MultiStepForm";

const RoofingJobAppSection = () => {
  return (
    <section className={"mb-12 md:mb-26"} id="sectionJobApp">
      <div className="container mx-auto px-4 max-w-5xl">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-center">
          Apply Now - Get Pre-Qualified for Roofing Jobs
        </h3>
        <MultiStepForm/>
      </div>
    </section>
  );
};

export default RoofingJobAppSection;
