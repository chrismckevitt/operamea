import { ReactNode } from 'react';

export type IPillProps = {
  children: ReactNode;
  type?: 'lime' | 'purple' | 'ghost' | 'low' | 'medium' | 'high';
  size?: 'small' | 'large';
  onClick?: () => void;
  as?: 'button' | 'pill';
};
