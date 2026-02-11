import React from 'react';
import { Icon, IconProps } from '../Icon';

export const TextBlockTwotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <g opacity="0.4">
      <path d="M7 8.89039C10.15 7.32039 13.85 7.32039 17 8.89039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16.2997V7.92969" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </Icon>
  );
};
