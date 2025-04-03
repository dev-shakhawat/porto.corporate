import React from "react";

// images
import bnr from "../assets/bnr.jpg";
import bnrshap from "../assets/bnrshap.png";


// icons
import { IoArrowForwardSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <section className={"relative   "}>
      <div className="absolute top-0 left-0 w-full h-full bg-secondery/70   "></div>
      <img src={bnr} alt="bnr" className="" />
      <div className="absolute top-0 left-0 w-full h-full grid place-items-center ">
        <div className=" text-center text-primary ">
          <h4 className="flex font-medium text-[21px ] leading-[31px ] justify-center uppercase h-[15px] items-center gap-5   ">
            <img src={bnrshap} alt="bnrshap" /> we roke and we make{" "}
            <img src={bnrshap} alt="bnrshap" />
          </h4>

          <h1 className=" py-2 font-extrabold text-[92px ] leading-[68px ]   uppercase    ">
            awesome design
          </h1>
          <p className=" font-light text-[14px] leading-[26px] opacity-70  ">Porto is a huge success in the one of world's largest MarketPlace.</p>

          <div className="flex justify-center gap-3 mt-6  ">
            <button type="button" className=" font-bold text-[12px] leading-[18px] py-2 px-6 rounded-[3px] uppercase bg-primary text-brand  ">learn more</button>
            <button type="button" className=" cmnBtn bg-brand flex items-center gap-2 py-2 px-6"> <span>get started now</span>  <IoArrowForwardSharp/>  </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
