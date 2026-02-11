import React from 'react';
import { Icon, IconProps } from '../Icon';

export const StopLinear: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
