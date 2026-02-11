import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const PolkadotDotTwotone: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M5.37 13C4.82 11.95 4.5 10.76 4.5 9.5C4.5 5.36 7.86 2 12 2C16.14 2 19.5 5.36 19.5 9.5C19.5 13.64 16.14 17 12 17C12 17 9.31 17 8.34 19.2C8.13 19.69 8 20.28 8 21L10 7" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.4" d="M13 21V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
