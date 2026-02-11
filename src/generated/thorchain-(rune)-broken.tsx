import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const ThorchainRuneBroken: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
      <path d="M12.6795 11.6999L19.1695 3.76992C19.8795 2.89992 18.9495 1.64992 17.9095 2.08992L8.9695 5.83992C8.2595 6.13992 8.07953 7.04992 8.61953 7.59992L9.89956 8.89992M6.07955 21.9099L16.3795 17.5699C17.0895 17.2699 17.2695 16.3599 16.7295 15.8099L12.6695 11.6999L4.85952 20.1799C4.07952 21.0299 5.00955 22.3599 6.07955 21.9099Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
));
