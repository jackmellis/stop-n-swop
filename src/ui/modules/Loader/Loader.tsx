import React from 'react';
import { useLocation } from 'react-router-dom';
import Pulse from 'react-spinners/PulseLoader';
import BK from 'ui/assets/sprites/bk-pixel.gif';
import { useQueryParam } from 'ui/hooks';

interface Props {
  color?: string;
  size?: string | number;
  sensible?: boolean;
}

export default function Loader({ color = '#FFF', size, sensible }: Props) {
  const q = useQueryParam('q');
  const { pathname } = useLocation();

  if (!sensible) {
    // TODO: add loaders for other series
    if (q?.includes('banjo') || pathname.includes('banjo-')) {
      // TODO: get permission for this image (or get a new one)
      return <img src={BK} alt="Loading" />;
    }
  }

  return <Pulse color={color} size={size} />;
}
