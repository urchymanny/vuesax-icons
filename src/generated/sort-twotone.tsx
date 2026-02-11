import React from 'react';
import { Icon, IconProps } from '../Icon';

export const SortTwotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.34" d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
};
