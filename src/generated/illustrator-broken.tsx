import React from 'react';
import { Icon, IconProps } from '../Icon';

export const IllustratorBroken: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M16.25 8V8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.65039 15.97L10.1804 8.03003L12.8204 15.97" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5293 13.3201H11.9393" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path d="M16.3496 15.9699V10.6799" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12.83V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
