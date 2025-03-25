"use client";
import React from "react";
import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";
import { useScroll } from "@/hooks/useScroll";

const Footer = () => {
  const { scrollToBlock } = useScroll();
  return (
    <footer className="py-6 md:py-12 bg-blue-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-5 sm:gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Metal Roofing Group
            </h3>
            <p className="text-blue-200 text-sm">
              Connecting skilled metal roofing subcontractors with top-tier
              <br className="hidden md:block" />
              insurance builders across Australia.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white mb-3">Quick Links</h3>
            <ul className="space-y-0 md:space-y-1">
              {[
                {
                  label: "About Us",
                  onClick: () => scrollToBlock("sectionJob"),
                },
                {
                  label: "Apply Now",
                  onClick: () => scrollToBlock("sectionJobApp"),
                },
                {
                  label: "Privacy Policy",
                  href: "/privacy-policy",
                  target: "_blank",
                },
                {
                  label: "Terms of Service",
                  href: "/terms-of-service",
                  target: "_blank",
                },
              ].map(({ label, href, onClick, target }) => (
                <li key={label}>
                  {label === "About Us" || label === "Apply Now" ? (
                    <button
                      onClick={onClick}
                      className="cursor-pointer hover:text-white transition-colors duration-200 text-blue-200 text-sm"
                    >
                      {label}
                    </button>
                  ) : (
                    <Link
                      target={target}
                      href={href || "/"}
                      className="hover:text-white transition-colors duration-200 text-blue-200 text-sm"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white mb-3">Contact Us</h3>
            <div className="space-y-1 md:space-y-2 text-sm">
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-sky-800 text-center text-blue-200 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Metal Roofing Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
