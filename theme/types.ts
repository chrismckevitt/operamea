import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    typography: {
      h1: {
        fontSize: string;
        lineHeight: string;
        fontWeight: number;
        letterSpacing: string;
        color: string;
        '@media (min-width: 671px)': {
          fontSize: string;
          letterSpacing: string;
        };
        '@media (min-width: 1050px)': {
          fontSize: string;
        };
      };
      h2: {
        fontSize: string;
        lineHeight: string;
        fontWeight: number;
        color: string;
        letterSpacing: string;
        '@media (min-width: 671px)': {
          fontSize: string;
          lineHeight: string;
        };
        '@media (min-width: 1050px)': {
          fontSize: string;
          lineHeight: string;
          letterSpacing: string;
        };
      };
      h3: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
        color: string;
        '@media (min-width: 671px)': {
          fontSize: string;
          letterSpacing: string;
        };
        '@media (min-width: 1050px)': {
          fontSize: string;
          letterSpacing: string;
        };
      };
      h4: {
        fontSize: string;
        lineHeight: string;
        fontWeight: number;
        color: string;
        '@media (min-width: 671px)': {
          fontSize: string;
          letterSpacing: string;
        };
        '@media (min-width: 1050px)': {
          fontSize: string;
          letterSpacing: string;
        };
      };
      p: {
        fontSize: string;
        lineHeight: string;
        fontWeight: number;
        color: string;
        '@media (min-width: 1050px)': {
          fontSize: string;
        };
      };
      caption: {
        fontSize: string;
        lineHeight: string;
        fontWeight: number;
        letterSpacing: string;
        color: string;
        '@media (min-width: 671px)': {
          fontSize: string;
        };
      };
      label: {
        fontSize: string;
        lineHeight: string;
        fontWeight: number;
        color: string;
        letterSpacing: string;
      };
    };
    defaults: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
      gutterSpacing: string;
    };
    breakpoints: string[];
    breakpointNames: {
      smallTablet: string;
      tablet: string;
      desktop: string;
      giant: string;
    };
    colors: {
      lime: string;
      light: string;
      medium: string;
      body: string;
      purple: string;
      limeDark: string;
      purpleLight: string;
      blue: string;
      orange: string;
      red: string;
    };
    media: {
      smallTablet: string;
      tablet: string;
      desktop: string;
      giant: string;
    };
    space: number[];
    spacing: {
      xs: string;
      sm: string;
      rg: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    maxWidth: string;
  }
}
