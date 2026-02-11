import React from 'react';
import { Icon, IconProps } from '../Icon';

export const FramerTwotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M5 2L19 16H5V9H19V2H5Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.4" d="M12 16V22L5 16H12Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
