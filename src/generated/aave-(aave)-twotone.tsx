import React from 'react';
import { Icon, IconProps } from '../Icon';

export const AaveAaveTwotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <g opacity="0.4">
      <path d="M8 16L12 7L16 16" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12H12" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
    </Icon>
  );
};
