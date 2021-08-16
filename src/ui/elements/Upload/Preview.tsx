import React, { useState } from 'react';
import type { ImageUrl } from 'domain/types';
import Photo from '../Photo';
import PreviewOptions from './PreviewOptions';

export default function Preview({
  preview,
  onClear,
}: {
  preview: ImageUrl;
  onClear(): void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="preview"
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onClick={() => setHovered(true)}
        className="w-full h-full"
      >
        <Photo src={preview} className="object-cover w-full h-full" />
      </button>
      <If condition={hovered}>
        <PreviewOptions onClear={onClear} onClose={() => setHovered(false)} />
      </If>
    </>
  );
}
