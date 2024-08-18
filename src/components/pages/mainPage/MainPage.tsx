import React from 'react';
import Search from '../../molecules/Search/Search';
import Header from '../../organisms/Header/Header';
import cl from './mainPage.module.scss';
import Filter from '../../organisms/Filter/Filter';
import CardBlock from '../../organisms/CardBlock/CardBlock';
import Pagination from '../../molecules/Pagination/Pagination';
import { useLazyGetPaintingsQuery } from '../../../store/api/paintingsApi';
import { useAppSelector } from '../../../hooks/redux';

const MainPage = () => {
  const [input, setInput] = React.useState<string>('');

  const currentPage = useAppSelector((state) => state.paintings.currentPage);
  const authorId = useAppSelector((state) => state.author.artist);
  const locationId = useAppSelector((state) => state.location.location);
  const yearFrom = useAppSelector((state) => state.years.from);
  const yearTo = useAppSelector((state) => state.years.to);
  const sendRequest = useAppSelector((state) => state.filter.sendRequest);

  const [getPaints, { data }] = useLazyGetPaintingsQuery();

  React.useEffect(() => {
    getPaints({
      page: currentPage,
      q: input,
      authorId: authorId?.value,
      locationId: locationId?.value,
      createdFrom: yearFrom,
      createdTo: yearTo,
    });
  }, [input, currentPage, sendRequest]);

  return (
    <>
      <Header />
      <main>
        <div className="main__container">
          <div className={cl.searchWrapper}>
            <Search input={input} setInput={setInput} />
            <Filter />
          </div>
          <CardBlock data={data?.response} />
        </div>
      </main>
      <footer className="footer">
        <Pagination />
      </footer>
    </>
  );
};

export default MainPage;
