import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const ArrowBottomBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M6.30919 11.22C4.65919 8.35 6.00919 6 9.32919 6H11.9992H14.6692C17.9792 6 19.3392 8.35 17.6792 11.22L16.3392 13.53L14.9992 15.84C13.3392 18.71 10.6292 18.71 8.96919 15.84" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
