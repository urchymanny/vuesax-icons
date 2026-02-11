import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const IllustratorTwotone: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <g opacity="0.4">
      <path d="M6.5 16L10 8L13.6 16" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.2998 13.2998H12.6998" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path d="M16.0996 16.0002V10.7002" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.1406 8.03418V8.03418" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
  </Icon>
));
