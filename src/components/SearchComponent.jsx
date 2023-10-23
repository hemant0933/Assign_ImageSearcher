import React from 'react';
import { SearchIcon } from '../constants/Icons';

const SearchComponent = ({ searchQuery, onSearchQueryChange, performSearch}) => {
  return (
    <div id='searchBox' className='w-[40vw] h-[56px] flex justify-between items-center gap-2 bg-slate-200 px-2 py-4 rounded-lg'>
    <input
        type='text'
        value={searchQuery}
        onChange={onSearchQueryChange}
        placeholder='Search for free photos'
        className="w-full px-4 py-2 rounded-md outline-none text-lg font-semibold inter text-gray-400"
    />
    <button className="flex items-center justify-center
     hover:bg-slate-300 p-1 rounded-md" type="button" onClick={performSearch}>
        <SearchIcon />
      </button>
  </div>
  );
}

export default SearchComponent;
