import React from 'react';
import { Icon, IconProps } from '../Icon';

export const ArrowSwapHorizontalLinear: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M20.5 14.99L15.49 20.01" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.5 14.99H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.5 9.00999L8.51 3.98999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 9.01001H3.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
