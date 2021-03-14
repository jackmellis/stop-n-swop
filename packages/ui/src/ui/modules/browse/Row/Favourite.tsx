import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import cx from 'classnames';
import Button from 'ui/elements/Button';
import { useBoop } from 'ui/hooks';
import { animated } from 'react-spring';

const useBoops = (
  states: Record<string, Parameters<typeof useBoop>[0]>,
  initialState = 'idle',
) => {
  const [state, setState] = useState(initialState);
  const [style, boop] = useBoop(states[state] || {});
  return [style, boop, setState] as const;
};

export default function Favourte() {
  const [favourited, setFavourited] = useState(false);
  const [style, boop, setState] = useBoops({
    click: {
      scale: favourited ? 1.25 : 0.75,
    },
    hover: {
      rotation: 15,
    },
  });

  const onHover = () => {
    setState('hover');
    boop();
  };
  const onClick = () => {
    setState('click');
    boop();
  };
  const Heart = animated(favourited ? FaHeart : FaRegHeart);

  return (
    <Button
      key="favourite"
      title="favourite"
      className="relative"
      onMouseEnter={onHover}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
        setFavourited(!favourited);
      }}
    >
      <Heart
        size="2rem"
        className={cx(favourited ? 'text-red-400' : 'text-white')}
        style={style}
      />
    </Button>
  );
}
