import React from 'react';

interface IProps {
  className: string;
  text: string;
}

export const Button: React.FC<IProps> = ({ className, text }) => {
  return <button className={`btn btn__${className}`}>{text}</button>;
};
