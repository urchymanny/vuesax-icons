import React from 'react';
import { Icon, IconProps } from '../Icon';

export const SagittariusBroken: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12 3H21V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.03003 15.97L3 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.0002 3L10.9102 13.09" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.59961 6.6001L17.3997 17.4001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
