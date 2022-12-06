import styled from 'styled-components';

export const HeroText = styled.h1`
  font-size: 41px;
  background: ${({ theme }): string =>
    `-webkit-linear-gradient(135deg, ${theme.colors.limeDark}, ${theme.colors.purple})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({ theme }): string => theme.media.smallTablet} {
    font-size: 64px;
  }
  ${({ theme }): string => theme.media.desktop} {
    font-size: 90px;
  }
`;

export const Lede = styled.p`
font-size 1.1rem;
color: ${({ theme }): string => theme.colors.medium};
font-weight: 300;
`;
