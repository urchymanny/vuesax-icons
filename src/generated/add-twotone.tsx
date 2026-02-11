import React from 'react';
import { Icon, IconProps } from '../Icon';

export const AddTwotone: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path opacity="0.4" d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
