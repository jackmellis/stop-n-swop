import React, { useCallback, useEffect, useRef, useState } from 'react';
import invader from 'ui/assets/space-invader.svg';

export default function ScrollInvaders() {
  const invaders = useRef<HTMLDivElement>();
  const container = useRef<HTMLDivElement>();
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const invade = useCallback(() => {
    const {
      width: maxWidth,
      height: maxHeight,
    } = container.current.getBoundingClientRect();
    const { width } = invaders.current.getBoundingClientRect();
    const incX = 40;
    const incY = 80;

    if (direction === 'right') {
      const nextRight = x + width + incX;
      if (nextRight > maxWidth) {
        setDirection('left');
        setY(y + incY);
      } else {
        setX(x + incX);
      }
    } else {
      const nextLeft = x - incX;
      if (nextLeft < 0) {
        setDirection('right');
        setY(y + incY);
      } else {
        setX(nextLeft);
      }
    }

    if (y > maxHeight + 100) {
      setY(-100);
    }
  }, [direction, y, x]);

  useEffect(() => {
    let handle: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      // clearTimeout(handle);
      if (handle == null) {
        handle = setTimeout(() => {
          clearTimeout(handle);
          invade();
        }, 150);
      }
      // invade();
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(handle);
    };
  }, [invade]);

  return (
    <div className="h-full w-full fixed">
      <div className="flex h-full relative" ref={container}>
        <div
          className="flex flex-col items-start absolute"
          ref={invaders}
          style={{ left: x, top: y }}
        >
          {new Array(3).fill(null).map(() => (
            <div className="flex">
              {new Array(10).fill(null).map(() => (
                <img
                  alt="space invader"
                  src={invader}
                  className="w-4 md:w-8 lg:w-10 mx-1 md:mx-2 lg:mx-4 md:my-2"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
