import React from 'react';
import Typeahead from 'ui/elements/Typeahead';
import type { Game } from '@sns/contracts/product';

interface Props {
  onSearch(value: string): void;
  productId: string;
  setProductId(value: string): void;
  setPlatformId(value: string): void;
  results: Game[];
  loading: boolean;
}

export default function GameSearch({
  onSearch,
  productId,
  setProductId,
  setPlatformId,
  results,
  loading,
}: Props) {
  const options = results.map((product) => {
    const value = product.id;
    const label = product.name;

    return {
      value,
      label,
    };
  });

  return (
    <div className="w-full">
      <Typeahead
        id="game_search"
        options={options}
        value={productId}
        onChange={(value) => {
          const game = results.find((game) => game.id === value);
          setProductId(game.id);
          if (game.platformIds.length === 1) {
            setPlatformId(game.platformId);
          } else {
            setPlatformId(null);
          }
        }}
        onSearch={onSearch}
        autoFocus
        label=""
        isLoading={loading}
      />
    </div>
  );
}
