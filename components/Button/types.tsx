import { ReactNode } from 'react';

export type IButtonSizeType = 'normal' | 'small';
export type IButtonStyleType = 'primary' | 'secondary';

export interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  size?: IButtonSizeType;
  styleType?: IButtonStyleType;
  children: ReactNode;
  fullWidth?: boolean;
  to?: string | undefined;
  id?: string;
}

export interface IButtonStyleProps {
  as?: ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: IButtonSizeType;
  styleType?: IButtonStyleType;
  children: string | ReactNode;
  fullWidth?: boolean;
  to?: string;
}
