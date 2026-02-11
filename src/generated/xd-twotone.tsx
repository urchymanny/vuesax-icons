import React from 'react';
import { Icon, IconProps } from '../Icon';

export const XdTwotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.4" d="M17.9599 8.47021V15.5302H16.1899C15.2099 15.5302 14.4199 14.7402 14.4199 13.7602C14.4199 12.7802 15.2099 11.9902 16.1899 11.9902H17.9599" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <g opacity="0.4">
      <path d="M6.04004 8.46973L11.69 15.5297" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.69 8.46973L6.04004 15.5297" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </Icon>
  );
};
