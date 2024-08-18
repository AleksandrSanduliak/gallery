import React from 'react';
import Card from '../../molecules/Card/Card';
import cl from './cardBlock.module.scss';
import { ICard } from '../../../types/card';

const CardBlock = ({ data }: { data: ICard[] | undefined }) => {
  return (
    <div className={cl.cardBlock}>
      {data &&
        data?.map((item: ICard) => {
          return <Card key={item.id} data={item} />;
        })}
    </div>
  );
};

export default CardBlock;
