import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const MenuIcon1Broken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.49023 12H21.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 12H5.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </Icon>
));
