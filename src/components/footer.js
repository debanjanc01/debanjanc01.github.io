import React from "react";
import SocialIcons from "./social";
const Footer = () => {
  return (
    <footer
      class="text-center text-white"
      style={{ "background-color": "#f1f1f1" }}
    >
      <div class="container pt-9">
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
