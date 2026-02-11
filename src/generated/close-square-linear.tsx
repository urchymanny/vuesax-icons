import React from 'react';
import { Icon, IconProps } from '../Icon';

export const CloseSquareLinear: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9.16998 14.83L14.83 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.83 14.83L9.16998 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
