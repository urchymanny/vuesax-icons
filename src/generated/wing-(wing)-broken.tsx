import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const WingWingBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M16.0004 5H19.5004L22.2004 9.7L17.0004 19L15.1504 15.9L18.7004 9.7L16.0004 5Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.8404 17.49L10.0004 19L8.15039 15.9L11.7004 9.7L9.0004 5H12.5004L15.2004 9.7L12.9304 13.77" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.80078 5H5.30078L8.00079 9.8L6.30078 12.7L1.80078 5Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
