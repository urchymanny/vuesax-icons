import React from 'react';
import { Icon, IconProps } from '../Icon';

export const TriangleBroken: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M10.9004 2L0.900391 12L10.9004 22V18L4.90039 12L10.9004 6V2Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.9604 8.06L22.9004 12L12.9004 22V18L18.9004 12L12.9004 6V2L15.9404 5.04001" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9004 9L7.90039 12L10.9004 15V9Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
