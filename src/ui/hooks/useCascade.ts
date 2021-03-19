import { useEffect, useState } from 'react';

export default function useCascade(total: number) {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const h = setTimeout(() => {
      if (index < total) {
        setIndex(index + 1);
      }
    }, 50);
    return () => clearTimeout(h);
  }, [index, total]);

  return (i: number) => {
    return {
      opacity: i > index ? 0 : 1,
      transition: 'opacity 250ms',
    };
  };
}

export type Cascade = ReturnType<typeof useCascade>;
