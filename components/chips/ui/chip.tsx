import React from 'react';

interface IProps {
  text: string;
  active: boolean;
  setActive: () => void;
}

export const Chip: React.FC<IProps> = ({ text, active, setActive }) => {
  return (
    <button
      className={`${active ? 'chip__active' : ''} chip`}
      onClick={setActive}
    >
      {text}
    </button>
  );
};
