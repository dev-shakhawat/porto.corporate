import React from "react";
import List from "./common/List";

// icons
import { TbShoppingBag } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const navlist = [
    { list: "Home" },
    { list: "elements" },
    { list: "features" },
    { list: "pages" },
    { list: "portfolio" },
    { list: "blog" },
    { list: "shop" },
  ];

  const navright = [{ list: <IoSearchOutline /> }, { list: <TbShoppingBag /> }];

  return (
    <nav class=" fixed top-0 left-0 w-full z-50 border-b-1 border-primary/20    ">
      <div className="container">
        <div className="flex items-center justify-between py-7   ">
          <img src="/images/logo.png" alt="logo" className="w-[80px]"/>
          <div className="flex">
            <List
              listarr={navlist}
              liststyle="text-white uppercase font-semibold text-[14px] leding-[24px] hover:text-brand  "
              boxstyle={"flex space-x-6 pr-4 border-r-2 border-tertiary    "}
              link={"#"}
            />
            <List
              listarr={navright}
              liststyle="text-white uppercase font-semibold text-[18px] hover:text-brand  "
              boxstyle={"flex space-x-6 ml-4   "}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
