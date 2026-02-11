import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const KyberNetworkKncBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M5 11.7001V15.9701C5 16.6201 5.31003 17.2201 5.84003 17.6001L10.84 21.1701C11.54 21.6701 12.47 21.6701 13.16 21.1701L18.16 17.6001C18.69 17.2201 19 16.6201 19 15.9701V7.16011C19 6.44011 18.62 5.78011 17.99 5.42011L12.99 2.56011C12.38 2.21011 11.62 2.21011 11.01 2.56011L6.01001 5.42011C5.39001 5.78011 5 6.44011 5 7.16011" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 3L10 12L11.85 21.23" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.16 16.91L10 12L18.54 7.26001" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
