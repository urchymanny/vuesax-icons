import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const AnkrAnkrBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M8.99023 3.5L12.0002 2L20.8903 6.44V9.78" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.10938 9.78003V6.44003L4.9494 5.53003" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.10938 14.22V17.56L11.9994 22L20.8894 17.56V14.22" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 21.9999V16.4399" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0005 16.4401C14.4527 16.4401 16.4406 14.4522 16.4406 12.0001C16.4406 9.54792 14.4527 7.56006 12.0005 7.56006C9.5484 7.56006 7.56055 9.54792 7.56055 12.0001C7.56055 14.4522 9.5484 16.4401 12.0005 16.4401Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
  </Icon>
));
