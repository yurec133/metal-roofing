"use client";
import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import Modal from "@/components/Modal";
import ModalContent from "@/components/ModalContent";
import {useScroll} from "@/hooks/useScroll";
import {useModal} from "@/hooks/useModal";

const JobSection = () => {
  const { isOpen, closeModal } = useModal(true);
  const { scrollToBlock } = useScroll();

  return (
    <>
      <section id={'sectionJob'} className="pb-10 md:pb-14 pt-5 bg-gradient-to-l from-blue-700 via-blue-800 to-blue-900 shadow-lg text-white text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-7 flex items-center justify-end gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-[6px] bg-yellow-400">
              <HomeIcon className="w-5 h-5 text-blue-900" />
            </div>
            <div className={"font-bold"}>Metal Roofing Group</div>
          </div>
          <h1 className="text-lg md:text-2xl lg:text-5xl font-bold mb-6">
            Get Consistent, High-Paying Metal
            <br /> Roofing Jobs – Join the Metal Roofing Group Today!
          </h1>
          <p className="md:text-xl mb-6">
            We connect skilled metal roofing subcontractors with top-tier
            insurance builders across Australia. Get steady work, fast payments,
            and zero admin headaches.
          </p>

          <button
            onClick={() => scrollToBlock("sectionJobApp")}
            className="cursor-pointer bg-yellow-400 font-bold text-blue-900 px-6 py-3 rounded-lg
              hover:bg-yellow-500 transition-colors
              shadow-md hover:shadow-lg"
          >
            Apply Now
          </button>
        </div>
      </section>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalContent scrollToBlock={scrollToBlock} onClose={closeModal} />
      </Modal>
    </>
  );
};

export default JobSection;
