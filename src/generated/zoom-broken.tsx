import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const ZoomBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 9.67999V12.48C6 14.02 7.25001 15.26 8.79001 15.25L12.47 15.22C12.98 15.22 13.39 14.8 13.39 14.3V11.53C13.39 10 12.15 8.76001 10.62 8.76001H6.92999C6.40999 8.76001 6 9.16999 6 9.67999Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.0005 9.23999V14.78L15.2305 12.93V11.09L18.0005 9.23999Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001" stroke="#17191C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
