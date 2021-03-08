import { useCallback, useEffect, useState } from 'react';
import { useSpring } from 'react-spring';

export default function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}: {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
  springConfig?: {
    tension: number;
    friction: number;
  };
} = {}) {
  const [isBooped, setIsBooped] = useState(false);
  const style = useSpring({
    transform: isBooped
      ? `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`
      : `translate(0px, 0px) rotate(0deg) scale(1)`,
    config: springConfig,
  });

  useEffect(() => {
    if (!isBooped) {
      return;
    }

    const handle = setTimeout(() => setIsBooped(false), timing);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(handle);
  }, [isBooped, timing]);

  const trigger = useCallback(() => setIsBooped(true), []);

  return [style, trigger] as const;
}
