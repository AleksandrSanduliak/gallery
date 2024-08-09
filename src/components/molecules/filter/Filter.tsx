import React from 'react';
import cl from './filter.module.scss';
import FilterIcon from '../../../assets/icons/FilterIcon';

const Filter = () => {
  return (
    <div className={cl.filter}>
      <FilterIcon />
    </div>
  );
};

export default Filter;
