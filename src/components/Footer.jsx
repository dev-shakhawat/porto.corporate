import React from 'react'
import List from './common/List'

const Footer = () => {
    const pagesArr = [
        {list: "Call to Action"},
        {list: "Pricing Tables"},
        {list: "Word Rotator"},
        {list: "Tooltips & Popovers"},
        {list: "Sticky Elements"},
    ]

    const pagearrtwo = [
        {list: "Progress Bars"},
        {list: "Sections"},
        {list: "Lists"},
        {list: "Image Frames"},
        {list: "Testimonials"},
    ]
  return (
    <div className=  ' bg-secondery '>
        <div className="container">
            <div className="flex py-[76px] justify-between    ">

                {/* contact details */}
                <div className=" ">
                    <h3 className=' font-semibold text-[22px] leading-[18px] tracking-[-1.1px] capitalize text-primary mb-4 '> contact details</h3>
                    <List listarr={[{list: "Porto Template 123"} , {list: "Porto Blvd, Suite"}]} liststyle={" text-[14px] leading-[26px] text-tertiary    "}  />

                    <div className="mt-10">
                    <List listarr={[{list: "Call: 123-456-7890"} , {list: "Email: info@porto.com"}]} liststyle={" text-[18px] leading-[26px] text-tertiary    "}  />

                    </div>
                </div>

                {/* pages */}
                <div className="">
                    <h3 className=' font-semibold text-[22px] leading-[14px] tracking-[-1.1px] capitalize text-primary mb-4 '> pages</h3>
                    <div className="flex gap-16">
                      <List listarr={pagesArr} liststyle={" text-[18px] leading-[26px] text-tertiary duration-[.4s] py-1 cursor-pointer hover:text-primary hover:ml-1     "}  />
                      <List listarr={pagearrtwo} liststyle={" text-[18px] leading-[26px] text-tertiary duration-[.4s] py-1 cursor-pointer hover:text-primary hover:ml-1     "}  />

                    </div>
                </div>

                {/* newsletter */}
                <div className="">
                    <h3 className=' font-semibold text-[22px] leading-[14px] tracking-[-1.1px] capitalize text-primary mb-4 '> newslettwe</h3>
                    <List listarr={[{list:"Get all the latest informationon Sales and Offers."} , {list: "Sign up for newsletter today."}]} liststyle={"w-[90%]  text-[18px] leading-[26px] text-tertiary duration-[.4s] py-1 cursor-pointer hover:text-primary hover:ml-1     "}  />

                    <div className="flex rounded-[30px] overflow-hidden mt-5 ">
                        <input type="text" placeholder='Email Address...' className=' bg-primary py-2 px-4  '/>
                        <button type='button' className=' bg-brand font-bold text-primary uppercase  px-4     '    >subscribe!</button>
                    </div>
                </div>

            </div>

        </div>

        {/* copyright */}
        <div className=" border-t-1 border-primary/20 text-center py-6  "><p className=' text-[12px] leading-[26px] text-tertiary   '>© Copyright 2025. All Rights Reserved.</p></div>
    </div>
  )
}

export default Footer