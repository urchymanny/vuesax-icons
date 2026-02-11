import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const VuesaxLinear: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M21 8L12 22L2.95996 8" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 4H6L12 13L18 4H21L12 18L3 4Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 3L12 9L16 3L13.2 4V2H10.8V4L8 3Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
