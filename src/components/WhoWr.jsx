import React from "react";

import gallery1 from "../assets/gallery-1.jpg";

const WhoWr = () => {
  return (
    <div className="  bg-secondery  ">
      <div className="container">
        <div className="flex py-[110px] gap-5 relative">
          <div className="min-w-[35%]">
            <h2 className=" font-bold text-[28px] leading-[42px] text-primary   ">
              Who We Are
            </h2>
            <h4 className=" font-thin text-base leading-[28px] text-primary mt-2  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit massa
              enim. Nullam id varius nunc.
            </h4>
            <p className="font-thin text-[12px] leading-[26px] text-primary mt-4  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id varius nunc. Vivamus bibendun magna
              ex, et faucibus lacus venenatis eget
            </p>

            <button type="button" className="cmnBtn bg-brand px-10 py-4 mt-6  ">
              learn more
            </button>
          </div>
          <div className=" w-full    ">
            <img src={gallery1} alt="gallery1"  className="absolute bottom-[-0%] right-0 w-[40%] h-[115%]     "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWr;
