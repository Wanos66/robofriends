import React from "react";

const SearchBox = ({searchChange}) => {
  return (
      <div className='p-2'>
        <input
            className='p-3 border border-success bg-white'
            type="search"
            placeholder='search robots'
            onChange={searchChange}
        />
      </div>
  );
};

export default SearchBox;