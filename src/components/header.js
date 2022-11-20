import React from "react";
import { Link } from "gatsby";
import SocialIcons from "./social";

const Header = () => {
  return (
    <header>
      <div className="text-2xl p-6 items-center">Debanjan Choudhury</div>
      <SocialIcons />
      <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
