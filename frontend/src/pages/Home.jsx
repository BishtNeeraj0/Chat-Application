import React from "react";
import Sidebar from "../components/sidebar/sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white shadow-md">
      <Sidebar />
    </div>
  );
};

export default Home;
