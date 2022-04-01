import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const PageWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <div className='page-wrapper'>
      {children}
    </div>
  )
}