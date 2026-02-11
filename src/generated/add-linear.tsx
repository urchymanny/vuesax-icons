import React from 'react';
import { Icon, IconProps } from '../Icon';

export const AddLinear: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
