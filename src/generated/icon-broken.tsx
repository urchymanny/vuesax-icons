import React from 'react';
import { Icon, IconProps } from '../Icon';

export const IconBroken: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path opacity="0.58" d="M24 0H0V24H24V0Z" fill="white"/>
      <path d="M12 11.5C13.1046 11.5 14 10.6046 14 9.5C14 8.39543 13.1046 7.5 12 7.5C10.8954 7.5 10 8.39543 10 9.5C10 10.6046 10.8954 11.5 12 11.5Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path d="M10 13.5C11.25 14.13 12.73 14.13 13.99 13.51L14 13.5" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 16.5L12 13.97L14 16.5" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
    </Icon>
  );
};
