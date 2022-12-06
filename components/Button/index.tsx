import React, { useMemo } from 'react';

import { IButtonProps } from './types';
import { Container, InnerText, StyledButton } from './style';

const Button: React.FC<IButtonProps> = ({
  type = 'button',
  styleType = 'primary',
  size,
  onClick,
  children,
  fullWidth,
  to,
  id,
  ...rest
}: IButtonProps) => {
  const Inner = useMemo(() => {
    const content = <InnerText>{children}</InnerText>;
    return <Container size={size}>{content}</Container>;
  }, [children, size]);

  const link = to ? `${to}` : '';
  if (link) {
    return (
      <StyledButton
        as="a"
        href={link}
        styleType={styleType}
        size={size}
        fullWidth={fullWidth}
        {...rest}
      >
        {Inner}
      </StyledButton>
    );
  }
  return (
    <StyledButton
      styleType={styleType}
      type={type || 'button'}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
      {...rest}
    >
      {Inner}
    </StyledButton>
  );
};

export default Button;
