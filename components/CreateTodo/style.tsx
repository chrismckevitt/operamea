import styled from 'styled-components';

export const CreatePanel = styled.div`
  padding: ${({ theme }): string => theme.spacing.sm};
  background: ${({ theme }): string => theme.colors.purpleLight};
  border-radius: 15px;

  ${({ theme }): string => theme.media.tablet} {
    padding: ${({ theme }): string => theme.spacing.rg};
  }

  ${({ theme }): string => theme.media.desktop} {
    padding: ${({ theme }): string => theme.spacing.md};
  }
`;
