import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-size: ${({ theme }) => theme.defaults.fontSize};
    font-family: ${({ theme }) => theme.defaults.fontFamily};
    background: ${({ theme }) => theme.colors.light};
  }

  h1, h2, h3, h4, h5, h6, span, a, p {
    margin: 0;
    line-height: 1;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
