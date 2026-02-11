import React from 'react';
import { Icon, IconProps } from '../Icon';

export const TextItalicLinear: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9.62012 3H18.8701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.12012 21H14.3701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.25 3L9.75 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
