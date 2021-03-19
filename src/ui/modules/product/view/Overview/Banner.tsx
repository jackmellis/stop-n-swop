import { ImageUrl } from 'core/types';
import React from 'react';

export default function Banner({ image }: { image: ImageUrl }) {
  return (
    <div
      className="absolute w-full h-full bg-center"
      style={{
        backgroundImage: `url('${image}')`,
        filter: 'blur(3px) brightness(0.5)',
      }}
    />
  );
}
