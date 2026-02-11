import React from 'react';
import { Icon, IconProps } from '../Icon';

export const WindowsBroken: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M22 6.03V2L12 4V11H22" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 22L12 20V13H22V22Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 4.30005L2 6.00006V11.0001H10V4.30005Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 19.7L2 18V13H10V19.7Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
    </Icon>
  );
};
