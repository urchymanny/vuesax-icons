import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const TheGraphGrtBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M11.3097 13.9399C13.1764 13.9399 14.6897 12.4267 14.6897 10.5599C14.6897 8.69321 13.1764 7.17993 11.3097 7.17993C9.44297 7.17993 7.92969 8.69321 7.92969 10.5599C7.92969 12.4267 9.44297 13.9399 11.3097 13.9399Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path d="M15.0605 14.8101L12.0605 17.8101" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="#17191C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
