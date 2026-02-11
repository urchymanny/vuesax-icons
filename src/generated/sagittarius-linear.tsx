import React from 'react';
import { Icon, IconProps } from '../Icon';

export const SagittariusLinear: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12 3H21V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 3L3 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6001 6.59998L17.4001 17.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
