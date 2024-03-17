import React, { useState, useContext } from 'react';
// import icons
import { RiArrowUpSLine, RiArrowDownSLine, RiHome5Line } from 'react-icons/ri';
// 
import { Menu } from '@headlessui/react';
// import House Context 
import { HouseContext } from './HouseContext';
// import Container from 'postcss/lib/container';
const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  // create new use state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiHome5Line className='dropdown-icon-primary' />
        <div className=''>
          <div className='text-[15px] font-medium leading-tight  '>{property}</div>
          <div className='text-[13px]'>Select Your Place</div>
        </div>
        {isOpen ? (<RiArrowUpSLine className='dropdown-icon-secondary' />) : (<RiArrowDownSLine className='dropdown-icon-secondary' />)}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item onClick={() => setProperty(property)}
              as='li' key={index}
              className='cursor-poniter hover:text-violet-700 transition'>
              {property}
            </Menu.Item>
          )
        }
        )}
      </Menu.Items>
    </Menu>
  )
};

export default PropertyDropdown;
