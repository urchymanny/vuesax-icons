import React from 'react';
import { Icon, IconProps } from '../Icon';

export const FramerBroken: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M5 10.52V9H19V2H5L19 16H5V15.22" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16V22L5 16H12Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
