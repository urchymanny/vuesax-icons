import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const KyberNetworkKncTwotone: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M11.01 2.57012L6.01001 5.4301C5.39001 5.7901 5 6.45011 5 7.17011V15.9801C5 16.6301 5.31003 17.2301 5.84003 17.6101L10.84 21.1801C11.54 21.6801 12.47 21.6801 13.16 21.1801L18.16 17.6101C18.69 17.2301 19 16.6301 19 15.9801V7.17011C19 6.45011 18.62 5.7901 17.99 5.4301L12.99 2.57012C12.38 2.22012 11.62 2.22012 11.01 2.57012Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <g opacity="0.4">
      <path d="M12 3L10 12L11.85 21.23" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.16 16.9098L10 11.9998L18.54 7.25977" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
  </Icon>
));
