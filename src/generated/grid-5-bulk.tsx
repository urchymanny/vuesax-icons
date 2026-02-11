import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const GridIcon5Bulk: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path opacity="0.6" d="M22 7.81V12H9V2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor"/>
      <path d="M9 2V22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H9Z" fill="currentColor"/>
      <path opacity="0.4" d="M22 12V16.19C22 19.83 19.83 22 16.19 22H9V12H22Z" fill="currentColor"/>
  </Icon>
));
