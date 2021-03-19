import React from 'react';

export default function Image({ image }: { image: string }) {
  return (
    <div
      className="w-1/2 sm:w-1/3 md:w-1/4 flex-shrink-0 relative bg-contain bg-no-repeat bg-center"
      style={
        {
          backgroundImage: `url(${image})`,
          '--aspect-ratio': 16 / 9,
        } as any
      }
    />
  );
}
