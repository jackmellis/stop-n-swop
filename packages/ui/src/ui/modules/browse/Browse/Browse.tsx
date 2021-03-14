import React, { useState } from 'react';
import art from 'ui/assets/Super_Mario_64_Boxart.png';
import { useCascade } from 'ui/hooks';
import Search from 'ui/modules/browse/Search';
import { Grid as ProductGrid } from 'ui/modules/product/grid';
import Filters from '../Filters';
import Row from '../Row';

const list = [
  'Super Mario 64',
  'Super Mario Sunshine',
  'Super Mario Galaxy',
  'Super Mario Galaxy 2',
  'Super Mario World',
  'Super Mario Bros 3',
  'Super Mario Bros 2',
  'Super Mario Bros',
  'Super Mario Kart',
  'Mario Kart 64',
  'Mario Kart Double Dash',
  'Mario Kart Wii',
  'Mario Kart 8',
];

export default function Browse() {
  const [search, setSearch] = useState('');
  const cascade = useCascade(list.length);

  return (
    <div className="flex-grow flex flex-col">
      <Search value={search} onChange={setSearch} />
      <div className="flex-grow flex flex-col lg:flex-row">
        <Filters />
        <ProductGrid>
          {list.map((name, i) => (
            <Row
              key={name}
              cover={art}
              name={name}
              platform="Nintendo 64"
              totalListings={i === 2 ? 0 : 17}
              style={cascade(i)}
            />
          ))}
        </ProductGrid>
      </div>
    </div>
  );
}
