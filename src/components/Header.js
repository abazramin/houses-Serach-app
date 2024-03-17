import React from 'react';
// import Link form react router dom
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-6  mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link to={'/'}>
          <img src={logo} alt={'logo hpme page'} />
        </Link>
        <div className='flex items-center gap-2'>
          {/* Bottons */}
          <Link className='hover:text-violet-900' >
            Log in
          </Link>
          <Link className='bg-violet-700 hover:bg-violet-900 text-white px-4 py-2 rounded-lg transition-all'>
            sing in
          </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
