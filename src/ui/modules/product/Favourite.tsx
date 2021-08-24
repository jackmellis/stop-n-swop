import React, { ReactNode, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import cx from 'classnames';
import Button from 'ui/elements/Button';
import { useBoop } from 'ui/hooks';
import { animated } from 'react-spring';
import { useFavourite, useToggleFavourite } from 'application/user';

const useBoops = (
  states: Record<string, Parameters<typeof useBoop>[0]>,
  initialState = 'idle',
) => {
  const [state, setState] = useState(initialState);
  const [style, boop] = useBoop(states[state] || {});
  return [style, boop, setState] as const;
};

export default function Favourte({
  productId,
  className,
  children,
}: {
  productId: string;
  className?: string;
  children?: ReactNode;
}) {
  const { data: value } = useFavourite(productId);
  const { action: toggle } = useToggleFavourite();
  const [style, boop, setState] = useBoops({
    click: {
      scale: value ? 1.25 : 0.75,
    },
    hover: {
      rotation: 15,
    },
  });

  const onHover = () => {
    setState('hover');
    boop();
  };
  const handleClick = () => {
    setState('click');
    boop();
  };
  const Heart = animated(value ? FaHeart : FaRegHeart);

  return (
    <Button
      key="favourite"
      title="favourite"
      className={cx('relative', className)}
      onMouseEnter={onHover}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleClick();
        toggle({ productId });
      }}
    >
      <Heart size="1em" className={cx(value && 'text-red-400')} style={style} />
      {children}
    </Button>
  );
}
