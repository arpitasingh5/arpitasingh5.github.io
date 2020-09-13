import React from "react";
import Social from "../components/Social";
import { IoIosPaperPlane } from "../components/Icons"
import Heading from "../components/Heading";

const Footer = () => {
  return (
    <section id="footer">
    <Heading icon={IoIosPaperPlane} title="Contact Me" />
    <Social />
      <div className="pt-24 pb-12 text-s justify-center leading-relaxed opacity-25">
        <div>Licensed under MIT.</div>
        <div>Copyright {new Date().getFullYear()} Arpita Singh.</div>
        <div>Made with Love in India.</div>
      </div>
    </section>
  );
};

export default Footer;
