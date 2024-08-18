import React from 'react';
import cl from './Pagination.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import ArrowLeft from '../../../assets/icons/ArrowLeft';
import ArrowRight from '../../../assets/icons/ArrowRight';
import { useDispatch } from 'react-redux';
import {
  nextPage,
  prevPage,
  setPage,
} from '../../../store/slice/paintingsSlice';
import { Themes } from '../../../types/theme';

const Pagination = () => {
  const dispatch = useDispatch();
  const theme = useAppSelector((state) => state.theme.themeStatus);

  const themeColor =
    theme === Themes.DARK ? 'darkThemeColor' : 'lightThemeColor';
  const themeActiveColor =
    theme === Themes.DARK ? cl.activeDarkTheme : cl.activeLightTheme;

  const totalCount = useAppSelector((state) => state.paintings.totalCount);
  const currentPage = useAppSelector((state) => state.paintings.currentPage);

  const pages = Array.from({ length: totalCount }, (_, i) => {
    const currentNum = i + 1;
    return (
      <p
        onClick={() => dispatch(setPage(currentNum))}
        className={`${currentPage === currentNum && cl.active && themeActiveColor} ${cl.number} bigLight ${themeColor}`}
        key={i}>
        {i + 1}
      </p>
    );
  });

  const onClickNextPage = () => {
    dispatch(nextPage());
  };

  const onClickPrevPage = () => {
    dispatch(prevPage());
  };

  return (
    <div className={cl.pagination}>
      <div className={cl.arrows} onClick={onClickPrevPage}>
        <ArrowLeft />
      </div>
      <div className={cl.pages}>{pages}</div>
      <div className={cl.arrows} onClick={onClickNextPage}>
        <ArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
