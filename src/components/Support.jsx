import React from 'react'

import Suppoetitm from './common/Suppoetitm';

// icons
import { SlUserFollowing } from "react-icons/sl";
import { IoLayersOutline } from "react-icons/io5";
import { AiTwotoneCalculator } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { IoWaterOutline } from "react-icons/io5";
import { SlMouse } from "react-icons/sl";

const Support = () => {

    const supportItem = [
        {id:1 , icon:<SlUserFollowing/>,title:"Customer Support",text:"Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
        {id:2 , icon:<IoLayersOutline/>,title:"Sliders",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."},
        {id:3 , icon:<AiTwotoneCalculator/>,title:"HTML5",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."},
        {id:4 , icon:<CiStar/>,title:"HTML5",text:"Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
        {id:5 , icon:<IoWaterOutline/>,title:"Colors",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."},
        {id:6 , icon:<SlMouse/>,title:"Buttons",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."},
    ]
  return (
    <div className=' pt-[70px] pb-[130px]   '>
        <div className="container">
            <div className="grid grid-cols-2 gap-14  ">
                {supportItem.map((item , index) => <Suppoetitm boxstyle={item.id % 2 !== 0 && " flex-row-reverse text-right  " } key={index} icon={item.icon} title={item.title} text={item.text}/> )}
            </div>
            <div className="flex justify-center mt-10  "> <a href='#' className='cmnBtn bg-brand text-white py-4 px-10   '>Learn more</a></div>
        </div>
    </div>
  )
}

export default Support