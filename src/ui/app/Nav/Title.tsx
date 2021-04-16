import React from 'react';
import { Link } from 'react-router-dom';
import { useBoop } from 'ui/hooks';
import { animated } from 'react-spring';
import Logo from 'ui/assets/logo.png';
import { HOME } from 'ui/constants/paths';

const AnimatedLink = animated(Link);

export default function Title() {
  const [style, boop] = useBoop({ x: 3, rotation: 3 });

  return (
    <AnimatedLink
      style={style}
      onMouseEnter={boop}
      to={HOME}
      className="hover:text-gray-500 md:transition-colors"
    >
      <img src={Logo} className="w-48" alt="Stop n Swop" />
    </AnimatedLink>
  );
}
