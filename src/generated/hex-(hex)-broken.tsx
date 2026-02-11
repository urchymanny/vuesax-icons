import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const HexHexBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M4.51001 7.65009L2 12.0001L7 20.6601H17L22 12.0001L17 3.34009H7L6.63 3.98009" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.8696 14H7.0296L5.09961 17.33L7.0296 20.66H10.8696L12.7996 17.33L10.8696 14Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path d="M14.3409 8H7.03085L3.38086 14.33L7.03085 20.66H14.3409L18.0009 14.33L14.3409 8Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
  </Icon>
));
