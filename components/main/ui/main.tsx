import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export const Main: React.FC<IProps> = ({ children }) => {
  return (
    <div className='main-component'>
      <div className='main-component__wrapper'>
        {children}
      </div>
    </div>
  );
};
