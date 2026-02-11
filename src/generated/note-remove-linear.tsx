import React from 'react';
import { Icon, IconProps } from '../Icon';

export const NoteRemoveLinear: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M7 14H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 5.95996L3.25 2.20996" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.96002 2.25L3.21002 6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 10H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 2H16C19.33 2.18 21 3.41 21 7.99V16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 9.01001V15.98C3 19.99 4 22 9 22H12C12.17 22 14.84 22 15 22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};
