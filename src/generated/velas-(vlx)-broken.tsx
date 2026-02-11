import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const VelasVlxBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M2 3.03003H22" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.69939 9.00011L3.10937 8.07011C2.62937 7.33011 3.16939 6.36011 4.03939 6.36011H19.9694C20.8494 6.36011 21.3794 7.33011 20.8994 8.07011L12.9394 20.4601C12.4994 21.1401 11.5094 21.1401 11.0694 20.4601L5.80938 12.2801" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
