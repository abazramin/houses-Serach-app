import React from 'react';
// import componets
import Banner from '../components/Banner'
import HomeList from '../components/HouseList'

const Home = () => {
  return <div className='min-h-[1600px]'>
    <Banner />
    <HomeList />
  </div>;
};

export default Home;
