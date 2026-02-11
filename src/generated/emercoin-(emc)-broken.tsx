import React from 'react';
import { Icon, IconProps } from '../Icon';

export const EmercoinEmcBroken: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M7.5 8H16.5V16H7.5" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 12H12.5V8" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.30001 7.96997 2.85001" stroke="#17191C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
