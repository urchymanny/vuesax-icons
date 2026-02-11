import React from 'react';
import { Icon, IconProps } from '../Icon';

export const SendTwotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path opacity="0.4" d="M3.5 22H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 3.5L19 17.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 13.77V3.5H15.27" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
