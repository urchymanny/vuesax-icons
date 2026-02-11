import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const TheGraphGrtTwotone: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path opacity="0.4" d="M11.3097 13.9402C13.1764 13.9402 14.6897 12.4269 14.6897 10.5602C14.6897 8.69345 13.1764 7.18018 11.3097 7.18018C9.44297 7.18018 7.92969 8.69345 7.92969 10.5602C7.92969 12.4269 9.44297 13.9402 11.3097 13.9402Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path opacity="0.4" d="M15.0596 14.8101L12.0596 17.8101" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.4" d="M17.5 9.3125V9.3125" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
