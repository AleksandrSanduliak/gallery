import React from 'react';
import Search from '../../molecules/search/Search';
import Header from '../../organisms/header/Header';
import cl from './mainPage.module.scss';
import Filter from '../../molecules/filter/Filter';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main__container">
          <div className={cl.searchWrapper}>
            <Search />
            <Filter />
          </div>
        </div>
      </main>
      <footer>f</footer>
    </>
  );
};

export default MainPage;
