import React from 'react';
import { Icon, IconProps } from '../Icon';

export const MinusBroken: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M16 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12H11.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
