import React, { useState } from 'react';
import { Chip } from './chip';

interface IProps {
  chips: string[];
  activeChip: string;
  setActiveChip: (value: string) => void;
}

export const Chips: React.FC<IProps> = ({
  chips,
  activeChip,
  setActiveChip,
}) => {
  // const [activeChip, setActiveChip] = useState(chips[0]);

  const renderChip = (chip: string, index: number) => {
    return (
      <Chip
        active={activeChip === chip}
        key={index}
        text={chip}
        setActive={() => setActiveChip(chips[index])}
      />
    );
  };

  return <div className='chips'>{chips.map(renderChip)}</div>;
};
