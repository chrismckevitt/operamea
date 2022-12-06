import styled, {
  css,
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme,
} from 'styled-components';

import { IButtonStyleProps, IButtonSizeType } from './types';

const styledContent = css<IButtonStyleProps>`
  box-sizing: border-box;
  -webkit-appearance: none !important;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 5px;
  padding: 0;
  display: inline-block;
  color: ${({ theme }): string => theme.colors.body};
  font-family: ${({ theme }): string => `${theme.defaults.fontFamily}`};
  font-weight: 500;
  text-align: center;
  text-decoration: none;

  ${({ fullWidth }): FlattenSimpleInterpolation => {
    if (fullWidth) {
      return css`
        width: 100%;
      `;
    }
    return css`
      max-width: 100%;
    `;
  }}

  &:hover,
  &:focus {
    outline: 0;
  }

  ${({
    styleType,
    theme,
  }): string | FlattenInterpolation<ThemedStyledProps<IButtonStyleProps, DefaultTheme>> => {
    switch (styleType) {
      case 'primary':
        return css`
          background: ${theme.colors.lime};
          border: none;
          &:hover,
          &:focus {
            background: ${theme.colors.limeDark};
          }
        `;
      case 'secondary':
        return css`
          background: ${theme.colors.purple};
          color: ${theme.colors.light};
          border: none;
          &:hover,
          &:focus {
            background: ${theme.colors.purpleLight};
          }
        `;
      default:
        return '';
    }
  }}
`;

export const StyledButton = styled.button<IButtonStyleProps>`
  ${styledContent}
`;

export const InnerText = styled.span`
  display: block;
  height: auto;
  opacity: 1;

  svg {
    display: block;
  }
`;

export const Container = styled.span<{ size?: IButtonSizeType }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  ${({ size, theme }): FlattenSimpleInterpolation => {
    if (size === 'small') {
      return css`
        padding: 0 ${theme.spacing.sm};
        min-height: 36px;
        font-size: 14px;
      `;
    }

    return css`
      padding: 0 ${theme.spacing.lg};
      min-height: 46px;
      font-size: 16px;
    `;
  }}
`;

export default StyledButton;
