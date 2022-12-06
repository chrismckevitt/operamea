import styled, {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme,
} from 'styled-components';

import { IPillProps } from './types';

const pillTypeStyling = css<IPillProps>`
  ${({
    type,
    theme,
    as,
  }): string | FlattenInterpolation<ThemedStyledProps<IPillProps, DefaultTheme>> => {
    switch (type) {
      case 'lime':
        return css`
          background: ${theme.colors.lime};
          color: ${theme.colors.body};
          border: none;
          &:hover {
            background: ${as === 'button' && theme.colors.limeDark};
          }
        `;
      case 'purple':
        return css`
          background: ${theme.colors.purple};
          color: ${theme.colors.light};
          border: none;
          &:hover {
            background: ${as === 'button' && theme.colors.purpleLight};
          }
        `;
      case 'ghost':
        return css`
          background: ${theme.colors.light};
          color: ${theme.colors.body};
          border: solid 1px ${theme.colors.medium};
          &:hover {
            border-color: ${as === 'button' && theme.colors.purpleLight};
            color: ${as === 'button' && theme.colors.purpleLight};
          }
        `;
      case 'low':
        return css`
          background: transparent;
          color: ${theme.colors.blue};
          border: solid 1px ${theme.colors.blue};
        `;
      case 'medium':
        return css`
          background: transparent;
          color: ${theme.colors.orange};
          border: solid 1px ${theme.colors.orange};
        `;
      case 'high':
        return css`
          background: transparent;
          color: ${theme.colors.red};
          border: solid 1px ${theme.colors.red};
        `;
      default:
        return css``;
    }
  }}
`;

export const PillContainer = styled.div<IPillProps>`
  border-radius: 20px;
  margin: auto;
  padding: ${({ theme }): string => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: 13px;
  font-weight: 200;
  text-transform: ${({ as }): string => (as === 'pill' ? 'uppercase' : 'none')};
  font-family: ${({ as }): string => (as === 'pill' ? 'Monospace' : 'inherit')};
  cursor: ${({ as }): string => (as === 'button' ? 'pointer' : 'default')};
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  ${pillTypeStyling}
`;
