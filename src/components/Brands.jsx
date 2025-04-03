import React from "react";

import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo-3.png";
import logo4 from "../assets/logo-4.png";
import logo5 from "../assets/logo-5.png";
import logo6 from "../assets/logo-6.png";
import List from "./common/List";

const Brands = () => {
  const Brandarr = [
    { list: <img src={logo1} alt="logo1" /> },
    { list: <img src={logo2} alt="logo2" /> },
    { list: <img src={logo3} alt="logo3" /> },
    { list: <img src={logo4} alt="logo4" /> },
    { list: <img src={logo5} alt="logo5" /> },
    { list: <img src={logo6} alt="logo6" /> },
  ];
  return (
    <div className=" py-12  ">
      <div className="container">
        <List listarr={Brandarr} boxstyle={"flex justify-between gap-5 py-12  "} />
      </div>
    </div>
  );
};

export default Brands;
