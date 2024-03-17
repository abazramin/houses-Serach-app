import React from 'react';
// import icons from react icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  // use Destructure for upload props
  const { image, type, country, address, bedrooms, bathrooms, surface, price, id } = house;
  return (
    // styling div number1 
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] rounded-br-[90px]
  {/* Styling div number2  */}
  {/* Styling div number2  */}
  w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition-all'>
      <img className='mb-8' src={image} alt={id} />
      {/* Styling div number2  */}
      <div className='flex gap-x-2 mb-4 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
        <div className='bg-violet-500 rounded-full text-white px-3'>{country}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>
        {address}
        {/*  */}
        <div className='flex gap-x-4 mx-4'>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-20px'><BiBed /></div>
            <div>{bedrooms}</div>
          </div>
          {/* 2 */}
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-20px'><BiBath /></div>
            <div>{bathrooms}</div>
          </div>
          {/* 3 */}
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-20px'><BiArea /></div>
            <div>{surface}</div>
          </div>
        </div>
        <div className='text-lg font-semibold text-violet-600 mb-4'>
          {price}
        </div>
      </div>
    </div>
  )
};

export default House;
