import React from 'react';
import { Icon, IconProps } from '../Icon';

export const TextUnderlineTwotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path opacity="0.4" d="M5 21H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 3V10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
