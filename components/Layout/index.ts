import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';

export type BoxProps = SpaceProps | LayoutProps | TypographyProps | ColorProps | FlexboxProps;

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;

  ${compose(space, layout, typography, color, flexbox)}
`;

export const Flex = styled(Box)`
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }): string => theme.maxWidth};
  padding: ${({ theme }): string => `0 ${theme.defaults.gutterSpacing}`};
  text-align: center;
  margin: 0 auto;

  ${({ theme }): string => theme.media.smallTablet} {
    padding: ${({ theme }): string => `0 ${theme.spacing.md}`};
  }

  ${({ theme }): string => theme.media.desktop} {
    padding: ${({ theme }): string => `0 ${theme.spacing.xl}`};
  }
`;
