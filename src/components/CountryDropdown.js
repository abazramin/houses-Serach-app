import React, { useState, useContext } from 'react';
// import icons
import { RiMapPinLine, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
// 
import { Menu } from '@headlessui/react';
// import House Context 
import { HouseContext } from './HouseContext';
// import Container from 'postcss/lib/container';
const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  // create new use state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div className=''>
          <div className='text-[15px] font-medium leading-tight  '>{country}</div>
          <div className='text-[13px]'>Select Your Place</div>
        </div>
        {isOpen ? (<RiArrowUpSLine className='dropdown-icon-secondary' />) : (<RiArrowDownSLine className='dropdown-icon-secondary' />)}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item onClick={() => setCountry(country)}
              as='li' key={index}
              className='cursor-poniter hover:text-violet-700 transition'>
              {country}
            </Menu.Item>
          )
        }
        )}
      </Menu.Items>
    </Menu>
  )
};

export default CountryDropdown;
