import React from "react";
import { Mail, Phone } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";

const Footer = () => {
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
              <br className='hidden md:block' />
              insurance builders across Australia.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white mb-3">Quick Links</h3>
            <ul className="space-y-1">
              {[
                "About Us",
                "Apply Now",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className=" hover:text-white transition-colors duration-200 text-blue-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white mb-3">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center sm:justify-start text-blue-200">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:info@metalroofinggroup.com.au"
                  className="hover:text-white transition-colors text-blue-200"
                >
                  info@metalroofinggroup.com.au
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start text-blue-200 mb-5">
                <Phone className="w-4 h-4 mr-2" />
                <a
                  href="tel:1300XXX"
                  className="hover:text-white transition-colors text-blue-200"
                >
                  1300 XXX XXX
                </a>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-sky-800 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Metal Roofing Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
