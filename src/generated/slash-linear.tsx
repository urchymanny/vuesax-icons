import React from 'react';
import { Icon, IconProps } from '../Icon';

export const SlashLinear: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.9 5L4.90002 19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
