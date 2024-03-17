import React from 'react';
// import file HouseData
import { housesData } from '../data';
// import use prams from rect router dom 
import { useParams } from 'react-router-dom';
// import icons from react icons
import { BiBath, BiBed, BiArea } from 'react-icons/bi';
// import Link from react router dom
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  // get the house id 
  const { id } = useParams();
  // get the house based on the id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          {/*  */}
          <div className='2-1'>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
          {/*  */}
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
            <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
          </div>
          {/*  */}
          <div className='text-3xl font-semibold text-violet-500'>${house.price}</div>
        </div>
        {/*  */}
        <div className='flex flex-col items-start gap-8 md:flex-col lg:flex-row'>
          {/* div for image */}
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt={id} />
            </div>
            {/*  */}
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              {/* 2 */}
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>{house.bathrooms}</div>
              </div>
              {/* 3 */}
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{house.surface}</div>
              </div>
              {/*  */}
            </div>
            <div className=''>{house.description}</div>
          </div>
          {/*  */}
          <div className='flex-1 bg-white w-full mb-8 border border-gray-300
          rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'><img src={house.agent.image} alt={id} /></div>
              <div className=''>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                <Link to='' className='text-violet-700 text-sm'>View Listing</Link>
              </div>
            </div>
            {/* from */}
            <form className='flex flex-col  gap-y-4'>
              <input className='border border-gary-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm ' type='text' placeholder='Your Name*' />
              <input className='border border-gary-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm ' type='text' placeholder='Email*' />
              <input className='border border-gary-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm ' type='text' placeholder='Phone*' />
              <textarea className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message' defaultValue='Hello I am interersted in [Modern apartment]'></textarea>
              <div className='flex gap-x-2'>
                <button className='bg-violet-700 p-4 text-white hover:bg-violet-900 transition test-sm w-full rounded-lg '>Send message</button>
                <button className='bg-white p-4 text-primary hover:text-violet-800 border border-gray-300 hover:border-violet-800  test-sm w-full rounded-lg '>Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default PropertyDetails;
