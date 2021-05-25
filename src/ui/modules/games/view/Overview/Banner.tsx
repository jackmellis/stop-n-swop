import React from 'react';
import type { ImageUrl } from 'domain/types';

export default function Banner({ image }: { image: ImageUrl }) {
  if (!image) {
    return <div className="absolute w-full h-full bg-gray-900" />;
  }

  return (
    <img
      className="absolute w-full h-full object-center object-cover filter blur-sm brightness-50"
      src={image}
      alt={image}
      loading="lazy"
    />
  );
}
