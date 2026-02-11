import React from 'react';
import { Icon, IconProps } from '../Icon';

export const MirrorTwotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path opacity="0.4" d="M6 22H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
