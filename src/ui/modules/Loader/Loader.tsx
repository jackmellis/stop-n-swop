import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Pulse from 'react-spinners/PulseLoader';
import banjoKazooie from 'ui/assets/sprites/bk-pixel.gif';
import crash from 'ui/assets/sprites/crash.gif';
import link from 'ui/assets/sprites/link.gif';
import mario from 'ui/assets/sprites/mario.gif';
import pikachu from 'ui/assets/sprites/pikachu.gif';
import sonic from 'ui/assets/sprites/sonic.gif';
import { useQueryParam } from 'ui/hooks';

interface Props {
  color?: string;
  size?: string | number;
  sensible?: boolean;
}

export default function Loader({ color = '#FFF', size, sensible }: Props) {
  const q = useQueryParam('q');
  const { pathname } = useLocation();
  const { current: sensible2 } = useRef(Math.random() > 0.1);
  let src = '';

  if (!sensible && !sensible2) {
    if (q?.includes('banjo') || pathname.includes('banjo-')) {
      src = banjoKazooie;
    }
    if (q?.includes('bandicoot') || pathname.includes('bandicoot')) {
      src = crash;
    }
    if (q?.includes('zelda') || pathname.includes('zelda')) {
      src = link;
    }
    if (q?.includes('mario') || pathname.includes('super-mario')) {
      src = mario;
    }
    if (q?.includes('pokemon') || pathname.includes('pokemon')) {
      src = pikachu;
    }
    if (q?.includes('sonic') || pathname.includes('sonic')) {
      src = sonic;
    }

    if (src) {
      return <img src={src} alt="Loading" style={{ maxWidth: '4em' }} />;
    }
  }

  return <Pulse color={color} size={size} />;
}
