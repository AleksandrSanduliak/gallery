import React from 'react';
import cl from './card.module.scss';
import sSrc from './image 1.png';
import { useAppSelector } from '../../../hooks/redux';
import { Themes } from '../../../types/theme';
import { ICard } from '../../../types/card';

const Card = ({ data }: { data: ICard }) => {
  const theme = useAppSelector((state) => state.theme.themeStatus);
  const themeTitleColor =
    theme === Themes.DARK ? 'darkThemeColor' : 'lightThemeColor';
  const themeYearColor =
    theme === Themes.DARK ? cl.yearDarkTheme : cl.yearLightTheme;
  const themeLineColor =
    theme === Themes.DARK ? cl.lineDarkTheme : cl.lineLightTheme;

  return (
    <div className={cl.card}>
      <img src={sSrc} className={cl.img} loading="lazy" />
      <div
        className={`${cl.title} ${theme === Themes.DARK ? cl.titleDarkTheme : cl.titleLightTheme}`}>
        <div className={cl.titleInner}>
          <p className={`${cl.titleLine} ${themeLineColor}`} />
          <div className={cl.titleText}>
            <h2 className={`h1 ${themeTitleColor} ${cl.titleName}`}>
              {data?.name}
            </h2>
            <p className={`boldUpper ${themeYearColor}`}>{data?.created}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
