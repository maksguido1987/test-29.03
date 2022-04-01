import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import {
  Chips,
  Main,
  PageWrapper,
  SearchButtons,
  SearchInput,
  Slider,
} from '../components';

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [activeChip, setActiveChip] = useState('Пляжи');

  const onSetSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <>
      <Head>
        <title>Search Country</title>
      </Head>
      <PageWrapper>
        <Main>
          <Slider
            countries={[
              'Сент Винсент и Гренадины',
              'Испания',
              'Франция',
              'Португалия',
              'Саудовская Аравия',
              'Тайланд',
              'Бали',
              'Въетнам',
              'Венеция',
            ]}
          />
          <div className='main-component__motion-title'>
            Мир Breezzor огромный, исследуй его!
          </div>
          <Chips
            chips={['Пляжи', 'Breezzor Pass', 'Впечатления', 'Маршруты']}
            activeChip={activeChip}
            setActiveChip={setActiveChip}
          />
          <SearchInput
            placeholder={activeChip}
            value={searchValue}
            onChange={onSetSearchValue}
          />
          <SearchButtons />
        </Main>
      </PageWrapper>
    </>
  );
};

export default Home;
