import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const SortBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M10 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </Icon>
));
