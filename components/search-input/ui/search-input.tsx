import React from 'react';
import { Icons } from '../../icons';

interface IProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<IProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const getPlaceholder = () => {
    switch (placeholder) {
      case 'Пляжи':
        return 'пляжа';
      case 'Breezzor Pass':
        return 'отеля';
      case 'Впечатления':
        return 'впечатлени';
      case 'Маршруты':
        return 'маршрута';
      default:
        return '';
    }
  };

  return (
    <div className='search-input__wrapper'>
      <input
        className='search-input'
        placeholder={`Поиск по стране, региону, городу, названию ${getPlaceholder()}`}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <Icons name='filter-input' className='search-input__icon' />
    </div>
  );
};
