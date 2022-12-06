import React from 'react';
import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';
import GlobalStyle from '../theme/global';
import theme from '../theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
