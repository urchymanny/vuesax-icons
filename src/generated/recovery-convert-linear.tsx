import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const RecoveryConvertLinear: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M13.35 11.3299V14.0599C13.35 16.3399 12.44 17.2499 10.16 17.2499H7.44C5.17 17.2499 4.25 16.3399 4.25 14.0599V11.3299C4.25 9.0599 5.16 8.1499 7.44 8.1499H10.17C12.44 8.1499 13.35 9.0599 13.35 11.3299Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.25 7.43V10.16C17.25 12.44 16.34 13.35 14.06 13.35H13.35V11.33C13.35 9.06 12.44 8.15 10.16 8.15H8.14999V7.43C8.14999 5.15 9.05999 4.25 11.34 4.25H14.07C16.34 4.25 17.25 5.16 17.25 7.43Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.75 13.75C20.75 17.62 17.62 20.75 13.75 20.75L14.8 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.75 7.75C0.75 3.88 3.88 0.75 7.75 0.75L6.7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
