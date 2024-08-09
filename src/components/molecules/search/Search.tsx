import React from 'react';
import cl from './search.module.scss';
const Search = () => {
  return (
    <div>
      <input placeholder="Painting title" className={cl.input} type="text" />
    </div>
  );
};

export default Search;
