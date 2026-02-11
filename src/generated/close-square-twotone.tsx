import React from 'react';
import { Icon, IconProps } from '../Icon';

export const CloseSquareTwotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <g opacity="0.4">
      <path d="M9.16992 14.8299L14.8299 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.8299 14.8299L9.16992 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
