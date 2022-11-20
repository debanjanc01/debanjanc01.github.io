import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
const Layout = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg mx-auto max-w-4xl h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
