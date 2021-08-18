/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import { useBoop } from 'ui/hooks';
import { animated } from 'react-spring';
import StaticStop from 'ui/assets/logo/Stop.svg';
import N from 'ui/assets/logo/N.svg';
import StaticSwop from 'ui/assets/logo/Swop.svg';
import StaticPlus from 'ui/assets/logo/+.svg';
import StaticA from 'ui/assets/logo/A.svg';
import { pickAPalette } from './palettes';

const Stop = animated(StaticStop as any);
const Plus = animated(StaticPlus as any);
const Swop = animated(StaticSwop as any);
const A = animated(StaticA as any);
const B = A;

export default function Logo() {
  const [palette, setPalette] = useState(() => pickAPalette());
  const [plusStyle, plusBoop] = useBoop({ rotation: 45 });
  const [buttonStyle, buttonBoop] = useBoop({ y: 0.5, x: -0.5, scale: 0.95 });
  const [stopStyle, stopBoop] = useBoop({ x: -3 });
  const [swopStyle, swopBoop] = useBoop({ x: 3 });
  const boop = () => {
    plusBoop();
    buttonBoop();
    stopBoop();
    swopBoop();
  };

  useEffect(() => {
    const handle = setInterval(() => {
      setPalette(pickAPalette());
    }, 60000);

    return () => clearInterval(handle);
  }, []);

  const {
    a: { Component: ButtonA = A },
    b: { Component: ButtonB = B },
    a,
    b,
    pad,
    text,
  } = palette;

  return (
    <div
      style={{
        position: 'relative',
        height: '2.7em',
        fill: text,
        transition: 'fill 1s',
      }}
      onMouseEnter={boop}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Stop style={{ height: '1em', ...stopStyle }} />
        <span style={{ position: 'relative' }}>
          <N
            // @ts-ignore
            style={{
              height: '0.8em',
              fill: pad.contrast,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              transition: 'fill 1s',
            }}
          />
          <Plus
            style={{
              height: '2em',
              fill: pad.color,
              ...plusStyle,
              transition: 'fill 1s',
            }}
          />
        </span>
        <Swop style={{ height: '1em', ...swopStyle }} />
        <span
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '0.1em',
            right: '0.3em',
          }}
        >
          <ButtonB
            // @ts-ignore
            style={{
              position: 'relative',
              height: '0.9em',
              fill: b.color,
              bottom: b.bottom ?? 0,
              marginRight: '0.1em',
              transition: 'fill 1s',
              ...buttonStyle,
            }}
          />
          <ButtonA
            // @ts-ignore
            style={{
              position: 'relative',
              height: '0.9em',
              fill: a.color,
              bottom: a.bottom ?? 0,
              transition: 'fill 1s',
              ...buttonStyle,
            }}
          />
        </span>
      </div>
    </div>
  );
}
