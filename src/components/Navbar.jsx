import { useState } from 'react';
// import { SearchIcon } from '../constants/Icons';
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {

  const[open,setOpen] = useState(false);
 
  const openMenu= () => {
    open ? setOpen(false) : setOpen(true)
  }
  return (
    <div className='w-full h-20 bg-white z-30 fixed px-4 lg:px-8 top-0 left-0 right-0 flex justify-between items-center navcontainer'>
      <div className='font-semibold text-left text-2xl cursor-pointer select-none one'>Image Searcher</div>
      <div className='flex items-center text-base font-semibold justify-center space-x-14 two'>
          <span className='cursor-pointer hover:bg-slate-300 p-4 rounded-md'>Explore</span>
          <span className='cursor-pointer hover:bg-slate-300 p-4 rounded-md'>Collection</span>
          <span className='cursor-pointer hover:bg-slate-300 p-4 rounded-md'>Community</span>
      </div>
      <div className='flex items-center text-base font-semibold justify-center space-x-8 three'>
        <button className='cursor-pointer bg-slate-700 text-white hover:bg-slate-600 p-4 rounded-md'>Dark Mode</button>
      </div>
      <div className='text-3xl cursor-pointer four hover:bg-gray-100 p-2 rounded-md' onClick={openMenu} >
        <i className="ri-menu-3-line"></i>
      </div>
     {
      open && ( 
      <div className='absolute w-[160px] h-auto top-20 right-3 bg-white text-left text-base rounded-lg font-semibold transition-all shadow-2xl border p-2 flex flex-col gap-3  justify-center items-center z-50'>
          <span className='cursor-pointer hover:bg-slate-100 p-4 w-full rounded-md'>Explore</span>
          <span className='cursor-pointer hover:bg-slate-100 p-4 w-full rounded-md'>Collection</span>
          <span className='cursor-pointer hover:bg-slate-100 p-4 w-full rounded-md'>Community</span> 
         <span className='cursor-pointer hover:bg-slate-100 p-4 w-full rounded-md'>Dark Mode</span>
      </div>)
     }
    </div>
  );
}

export default Navbar;
