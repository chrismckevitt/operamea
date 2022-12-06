import styled, { css } from 'styled-components';

const sharedFormCss = css`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: ${({ theme }): string => theme.spacing.xs};
  margin-bottom: ${({ theme }): string => theme.spacing.sm};
  font-size: ${({ theme }): string => theme.defaults.fontSize};
`;

export const Input = styled.input`
  ${sharedFormCss}
`;

export const TextArea = styled.textarea`
  ${sharedFormCss}
`;

export const Select = styled.select`
  ${sharedFormCss}
`;
