import React from 'react';
import cx from 'classnames';
import { ImageUrl } from 'core/types';
import Banner from './Banner';
import Cover from './Cover';
import Meta from './Meta';

interface Props {
  banner: ImageUrl;
  cover: ImageUrl;
  developer: string;
  publisher: string;
  name: string;
  releaseDate: Date;
}

export default function Overview({
  banner,
  cover,
  developer,
  publisher,
  name,
  releaseDate,
}: Props) {
  return (
    <div
      className={cx(
        'relative pointer-events-none w-full h-48 border-white border-b overflow-y-hidden',
        'md:h-72',
        'lg:h-96',
      )}
    >
      <Banner image={banner} />
      <Cover image={cover} />
      <Meta
        developer={developer}
        publisher={publisher}
        name={name}
        releaseDate={releaseDate}
      />
    </div>
  );
}
