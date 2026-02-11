import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const RulerBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M22 10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17H19C21 17 22 16 22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 7V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10.05 7L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </Icon>
));
