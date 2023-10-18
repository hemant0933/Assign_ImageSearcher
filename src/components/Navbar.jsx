import React from 'react';
import { SearchIcon } from '../constants/Icons';

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-white z-30 fixed px-8 top-0 left-0 right-0 flex justify-between items-center'>
      <div className='font-semibold text-left text-2xl cursor-pointer select-none'>Image Searcher</div>
        <div className='flex items-center text-base font-semibold justify-center space-x-14'>
          <span className='cursor-pointer hover:bg-slate-300 p-4 rounded-md'>Explore</span>
          <span className='cursor-pointer hover:bg-slate-300 p-4 rounded-md'>Collection</span>
          <span className='cursor-pointer hover:bg-slate-300 p-4 rounded-md'>Community</span>
        </div>
      <div className='flex items-center text-base font-semibold justify-center space-x-8'>
        <button className='cursor-pointer bg-slate-700 text-white hover:bg-slate-600 p-4 rounded-md'>Dark Mode</button>
      </div>
    </div>
  );
}

export default Navbar;
