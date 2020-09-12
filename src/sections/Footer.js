import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="pt-24 pb-8 text-xs leading-relaxed opacity-25">
        <div>Licensed under MIT.</div>
        <div>Copyright {new Date().getFullYear()} Arpita Singh.</div>
        <div>Made with Love in India.</div>
      </div>
    </section>
  );
};

export default Footer;
