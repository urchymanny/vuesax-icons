import React from 'react';
import { Icon, IconProps } from '../Icon';

export const DaiDaiBroken: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M8 7V17H12C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7H8Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.48047 10H18.5205" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.48047 14H18.5205" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.3 7.96997 2.85" stroke="#17191C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
