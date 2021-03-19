import React, { useState } from 'react';
import View from './View';

export default function ConectedViewPage() {
  const [favourite, setFavourite] = useState(false);
  const productId = 'super_mario_64';
  const listingIds = new Array(10).fill(null).map((_, i) => `${i}`);

  return (
    <View
      favourite={favourite}
      toggleFavourite={() => setFavourite(!favourite)}
      listingIds={listingIds}
      productId={productId}
    />
  );
}
