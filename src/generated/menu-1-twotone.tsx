import React from 'react';
import { Icon, IconProps } from '../Icon';

export const MenuIcon1Twotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.34" d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
};
