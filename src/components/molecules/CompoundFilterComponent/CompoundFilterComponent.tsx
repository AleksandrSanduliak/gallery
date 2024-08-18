import React, { Dispatch, SetStateAction } from 'react';
import Plus from '../../../assets/icons/Plus';
import Minus from '../../../assets/icons/Minus';
import cl from './compoundFilter.module.scss';
import Input from '../../atoms/Input/Input';
import Select, { SingleValue } from 'react-select';
import { useAppSelector } from '../../../hooks/redux';
import { Themes } from '../../../types/theme';
import { colors } from '../../../consts/colors';
import { TSelectValue } from '../../../types/select';

interface ICompoundFilter {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CompoundFilterContext = React.createContext<ICompoundFilter>({
  isOpen: false,
  setIsOpen: () => {},
});

interface PostsContextProviderProps {
  children: JSX.Element | JSX.Element[] | string;
}

export function CompoundFilterComponent({
  children,
}: PostsContextProviderProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div>
      <CompoundFilterContext.Provider value={{ isOpen, setIsOpen }}>
        <div className={cl.parentWrapper}>{children}</div>
      </CompoundFilterContext.Provider>
    </div>
  );
}

function FilterHeaderWrapper({ children }: PostsContextProviderProps) {
  return <div className={cl.headerWrapper}>{children}</div>;
}

function FilterInputsWrapper({ children }: PostsContextProviderProps) {
  const { isOpen } = React.useContext(CompoundFilterContext);
  return <>{isOpen && <div className={cl.inputWrapper}>{children}</div>}</>;
}

function Toggle() {
  const { isOpen, setIsOpen } = React.useContext(CompoundFilterContext);

  return (
    <div
      className={cl.title}
      onClick={() => setIsOpen((prev: boolean) => !prev)}>
      {isOpen && <Minus />}
      {!isOpen && <Plus />}
    </div>
  );
}
type TOptions = {
  id: number;
  location: string;
  name: string;
};

function Selector({
  data,
  onChange,
  selectorPlaceholder,
  value,
}: {
  data: [] | undefined;
  onChange: (e: SingleValue<TSelectValue>) => void;
  selectorPlaceholder: string;
  value: { label: string; value: number } | null;
}) {
  const { isOpen } = React.useContext(CompoundFilterContext);
  const theme = useAppSelector((state) => state.theme.themeStatus);

  const options = data?.map((item: TOptions) => {
    return {
      value: item.id,
      label: item.name || item.location,
    };
  });

  return (
    <>
      {isOpen && (
        <div className={cl.selector}>
          <Select
            value={value}
            placeholder={selectorPlaceholder}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused
                  ? '#dedede'
                  : colors.primaryLightGray,
                backgroundColor: theme === Themes.DARK ? 'black' : 'white',
                color: theme === Themes.DARK ? 'white' : 'black',
              }),
              option: (provided) => ({
                ...provided,
                color: theme === Themes.DARK ? 'white' : 'black',
                backgroundColor: theme === Themes.DARK ? 'black' : 'white',
              }),
            }}
            isClearable={true}
            onChange={(e) => onChange(e)}
            options={options}
          />
        </div>
      )}
    </>
  );
}

function Title({ children }: PostsContextProviderProps) {
  return <h2 className="h1">{children}</h2>;
}

function List({ children }: PostsContextProviderProps) {
  const { isOpen } = React.useContext(CompoundFilterContext);
  return isOpen && <ul className="flyout-list">{children}</ul>;
}

function Item({ children }: PostsContextProviderProps) {
  return <li>{children}</li>;
}

CompoundFilterComponent.Toggle = Toggle;
CompoundFilterComponent.Title = Title;
CompoundFilterComponent.List = List;
CompoundFilterComponent.Item = Item;
CompoundFilterComponent.Selector = Selector;
CompoundFilterComponent.FilterHeaderWrapper = FilterHeaderWrapper;
CompoundFilterComponent.FilterInputsWrapper = FilterInputsWrapper;

export const FilterWithSelector = ({
  title,
  data,
  onChange,
  selectorPlaceholder,
  value,
}: {
  title: string;
  data: [] | undefined;
  onChange: (value: TSelectValue) => void;
  selectorPlaceholder: string;
  value: TSelectValue;
}) => {
  return (
    <CompoundFilterComponent>
      <CompoundFilterComponent.FilterHeaderWrapper>
        <CompoundFilterComponent.Title>{title}</CompoundFilterComponent.Title>
        <CompoundFilterComponent.Toggle />
      </CompoundFilterComponent.FilterHeaderWrapper>
      <CompoundFilterComponent.Selector
        value={value}
        selectorPlaceholder={selectorPlaceholder}
        data={data}
        onChange={onChange}
      />
    </CompoundFilterComponent>
  );
};

export const FilterWithRange = ({
  title,
  yearsFrom,
  yearsTo,
  setYearsFrom,
  setYearsTo,
}: {
  title: string;
  yearsFrom: string;
  yearsTo: string;
  setYearsFrom: React.Dispatch<React.SetStateAction<string>>;
  setYearsTo: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <CompoundFilterComponent>
      <CompoundFilterComponent.FilterHeaderWrapper>
        <CompoundFilterComponent.Title>{title}</CompoundFilterComponent.Title>
        <CompoundFilterComponent.Toggle />
      </CompoundFilterComponent.FilterHeaderWrapper>
      <CompoundFilterComponent.FilterInputsWrapper>
        <Input
          value={yearsFrom}
          setValue={setYearsFrom}
          placeholder="From"
          variant="filter"
        />
        <Minus margin={'0 0.5rem'} />
        <Input
          value={yearsTo}
          setValue={setYearsTo}
          placeholder="To"
          variant="filter"
        />
      </CompoundFilterComponent.FilterInputsWrapper>
    </CompoundFilterComponent>
  );
};
