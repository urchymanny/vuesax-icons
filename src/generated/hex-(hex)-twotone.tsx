import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const HexHexTwotone: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M17 3.33984H7L2 11.9998L7 20.6599H17L22 11.9998L17 3.33984Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path opacity="0.4" d="M10.8696 14H7.0296L5.09961 17.33L7.0296 20.66H10.8696L12.7996 17.33L10.8696 14Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path opacity="0.4" d="M14.3399 8H7.02988L3.37988 14.33L7.02988 20.66H14.3399L17.9999 14.33L14.3399 8Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
  </Icon>
));
