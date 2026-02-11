import React from 'react';
import { Icon, IconProps } from '../Icon';

export const XiaomiLinear: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M7.5 15V9H11.5C12.6 9 13.5 9.9 13.5 11V15" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 15V12" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 15V9" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
    </Icon>
  );
};
