import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const ZoomTwotone: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M6 9.67975V12.4798C6 14.0198 7.25001 15.2598 8.79001 15.2498L12.47 15.2198C12.98 15.2198 13.39 14.7997 13.39 14.2997V11.5298C13.39 9.99975 12.15 8.75977 10.62 8.75977H6.92999C6.40999 8.75977 6 9.16975 6 9.67975Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M18.0005 9.24023V14.7802L15.2305 12.9302V11.0902L18.0005 9.24023Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
  </Icon>
));
