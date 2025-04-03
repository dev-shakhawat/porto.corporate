import React from 'react'

const Teamcard = ({image , name , text}) => {
  return (
    <div className='text-center mx-10'>
        <img src={image} alt="image" className='mx-auto rounded-full   '/>
        <p  className=" text-center mt-10 ">{text}</p>
        <h5 className=' text-center mt-5 font-semibold   '>{name}</h5>
    </div>
  )
}

export default Teamcard