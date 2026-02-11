import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const FrameIcon3Bulk: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M24 0H0V24H24V0Z" fill="white"/>
      <path d="M12 6L17 3L22 6V18L17 21L7 15V9L17 15V9L12 6Z" fill="currentColor"/>
      <path opacity="0.4" d="M12 18L7 21L2 18V6L7 3L17 9V15L7 9V15L12 18Z" fill="currentColor"/>
  </Icon>
));
