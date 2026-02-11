import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const VelasVlxLinear: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M2 3H22" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99988 6.3999H19.9999C20.8999 6.3999 21.3999 7.3999 20.8999 8.0999L12.8999 20.4999C12.4999 21.1999 11.4999 21.1999 10.9999 20.4999L2.99988 8.0999C2.59988 7.2999 3.19988 6.3999 3.99988 6.3999Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
