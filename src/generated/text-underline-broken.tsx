import React from 'react';
import { Icon, IconProps } from '../Icon';

export const TextUnderlineBroken: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M5 21H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17C15.87 17 19 13.87 19 10V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 3V10C5 12.17 5.98 14.1 7.53 15.38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
