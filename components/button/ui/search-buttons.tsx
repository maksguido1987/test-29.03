import React from 'react';
import { Button } from './button';

export const SearchButtons = () => {
  return (
    <div className='search-buttons'>
      <Button className='white' text='На карте' />
      <Button className='blue' text='Все пляжи страны' />
    </div>
  );
};
