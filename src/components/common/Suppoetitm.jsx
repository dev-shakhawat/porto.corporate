import React from 'react'

const Suppoetitm = ({icon,title,text , boxstyle}) => {
  return (
    <div className={` gap-6 flex  ${boxstyle}  `}>
        <div className="text-brand text-3xl ">{icon}</div>
        <div className="flex flex-col gap-2 ">
            <h3 className=' font-semibold text-[20px] leading-[27px] text-secondery   '>{title}</h3>
            <p className=" text-[14px] leading-[26px] text-tertiary w-[487px]  ">{text}</p>
        </div>
    </div>
  )
}

export default Suppoetitm