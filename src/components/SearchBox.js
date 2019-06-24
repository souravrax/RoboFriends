import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--white br4 tc bg-white outline-0'
        type='search'
        placeholder='Search Here'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;