import React from 'react';
import { Icon, IconProps } from '../Icon';

export const NexoNexoLinear: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12 6L17 3L22 6V18L17 21L7 15V9L17 15V9L12 6Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6L7 3L2 6V18L7 21L11.7 17.87" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
