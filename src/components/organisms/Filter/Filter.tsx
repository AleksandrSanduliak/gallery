import React from 'react';
import cl from './filter.module.scss';
import debounce from 'lodash.debounce';
import FilterIcon from '../../../assets/icons/FilterIcon/FilterIcon';
import Modal from '../../molecules/Modal/Modal';
import { useAppSelector } from '../../../hooks/redux';
import { Themes } from '../../../types/theme';
import Cross from '../../../assets/icons/Cross';
import {
  FilterWithRange,
  FilterWithSelector,
} from '../../molecules/CompoundFilterComponent/CompoundFilterComponent';
import { useGetAuthorsQuery } from '../../../store/api/authorsApi';
import { useDispatch } from 'react-redux';
import { setCurrentAuthor } from '../../../store/slice/authorsSlice';
import { useGetLocationsQuery } from '../../../store/api/locationsApi';
import { setLocation } from '../../../store/slice/locationsSlice';
import { setFromDate, setToDate } from '../../../store/slice/yearsSlice';
import { sendRequest } from '../../../store/slice/filterSlice';
import { TSelectValue } from '../../../types/select';

const Filter = () => {
  const dispatch = useDispatch();
  const theme = useAppSelector((state) => state.theme.themeStatus);

  const [isFilterClick, setIsFilterClick] = React.useState<boolean>(false);
  const [yearsFrom, setYearsFrom] = React.useState<string>('');
  const [yearsTo, setYearsTo] = React.useState<string>('');

  React.useEffect(() => {
    dispatch(setFromDate(yearsFrom));
    dispatch(setToDate(yearsTo));
  }, [yearsFrom, yearsTo]);

  const { data: authorsData } = useGetAuthorsQuery();
  const { data: locatiosData } = useGetLocationsQuery();

  const authorId = useAppSelector((state) => state.author.artist);
  const locationId = useAppSelector((state) => state.location.location);

  const filterThemeColor = theme === Themes.DARK ? cl.darkTheme : cl.lightTheme;
  const filterModalThemeColor =
    theme === Themes.DARK ? cl.modalDarkTheme : cl.modalLightTheme;
  const showResultsButton =
    theme === Themes.DARK ? 'darkThemeColor' : 'darkThemeGrayColor';
  const clearButton =
    theme === Themes.DARK ? 'darkThemeGrayColor' : 'secondaryGray';

  const handleFilterClick = () => {
    setIsFilterClick((prev) => !prev);
  };

  const closeModal = () => {
    setIsFilterClick(false);
  };

  const onChangeArtistSelector = (value: TSelectValue) => {
    dispatch(setCurrentAuthor(value));
  };
  const onChangeLocationSelector = (value: TSelectValue) => {
    dispatch(setLocation(value));
  };

  const onShowResuls = () => {
    dispatch(sendRequest());
  };

  const onClearButton = () => {
    dispatch(setCurrentAuthor(null));
    dispatch(setLocation(null));
    setYearsFrom('');
    setYearsTo('');
  };

  return (
    <div>
      <div
        onClick={handleFilterClick}
        className={`${filterThemeColor} ${cl.filter}`}>
        <FilterIcon />
      </div>
      {isFilterClick && (
        <Modal wrapperId="modal-root">
          <div className={`${filterModalThemeColor} ${cl.modal}`}>
            <div className={cl.inner}>
              <div onClick={closeModal} className={cl.cross}>
                <Cross width={25} height={25} />
              </div>
              <div className={cl.content}>
                <FilterWithSelector
                  value={authorId}
                  title="Artist"
                  selectorPlaceholder="Select the artist"
                  onChange={onChangeArtistSelector}
                  data={authorsData}
                />
                <FilterWithSelector
                  value={locationId}
                  onChange={onChangeLocationSelector}
                  selectorPlaceholder="Select the location"
                  data={locatiosData}
                  title="Location"
                />
                <FilterWithRange
                  yearsFrom={yearsFrom}
                  yearsTo={yearsTo}
                  setYearsFrom={setYearsFrom}
                  setYearsTo={setYearsTo}
                  title="Years"
                />
              </div>
              <div className={cl.buttons}>
                <button
                  onClick={debounce(onShowResuls, 200)}
                  className={`boldUpper ${showResultsButton}`}>
                  Show the results{' '}
                </button>
                <button
                  onClick={onClearButton}
                  className={`boldUpper ${clearButton}`}>
                  clear
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Filter;
