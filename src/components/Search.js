import React, { useContext } from 'react';
// import componets
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
// import icon from react icons
import { RiSearch2Line } from 'react-icons/ri'
import { HouseContext } from './HouseContext';
// 

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  // 
  return <div className='px-[30px] py-6 mx-auto
  flex flex-col lg:flex-row  justify-between items-center gap-4
  lg:gap-x-3 relative lg:-top-4 lg:shadow-1
  bg-white lg:bg-transparent lg:backdrop-blur'>
    <CountryDropdown />
    <PropertyDropdown />
    <PriceRangeDropdown />
    <button onClick={() => handleClick()} className='bg-violet-700 hover:bg-violet-800 w-full lg:max-w-[162px]
    h-16 rounded-lg flex justify-center items-center text-white text-lg'>
      <RiSearch2Line />
    </button>
  </div>;
};

export default Search;
