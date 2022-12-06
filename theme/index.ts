import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  name: 'Base',
  typography: {
    h1: {
      fontSize: '1.625rem',
      lineHeight: '125%',
      fontWeight: 400,
      letterSpacing: '-1px',
      color: '#050A30',
      '@media (min-width: 671px)': {
        fontSize: '1.875rem',
        letterSpacing: '-0.5px',
      },
      '@media (min-width: 1050px)': {
        fontSize: '2.375rem',
      },
    },
    h2: {
      fontSize: '1.375rem',
      lineHeight: '125%',
      fontWeight: 400,
      color: '#050A30',
      letterSpacing: '-0.5px',
      '@media (min-width: 671px)': {
        fontSize: '1.625rem',
        lineHeight: '1.875rem',
      },
      '@media (min-width: 1050px)': {
        fontSize: '2rem',
        lineHeight: '2.375rem',
        letterSpacing: '-0.75px',
      },
    },
    h3: {
      fontSize: '1.1875rem',
      lineHeight: '125%',
      fontWeight: 'normal',
      color: '#050A30',
      '@media (min-width: 671px)': {
        fontSize: '1.375rem',
        letterSpacing: '-0.25px',
      },
      '@media (min-width: 1050px)': {
        fontSize: '5.5rem',
        letterSpacing: '-0.25px',
      },
    },
    h4: {
      fontSize: '1rem',
      lineHeight: '125%',
      fontWeight: 400,
      color: '#050A30',
      '@media (min-width: 671px)': {
        fontSize: '1.125rem',
        letterSpacing: '-0.25px',
      },
      '@media (min-width: 1050px)': {
        fontSize: '1.25rem',
        letterSpacing: '-0.25px',
      },
    },
    p: {
      fontSize: '16px',
      lineHeight: '125%',
      fontWeight: 400,
      color: '#333',
      '@media (min-width: 1050px)': {
        fontSize: '1.125rem',
      },
    },
    caption: {
      fontSize: '0.875rem',
      lineHeight: '125%',
      fontWeight: 400,
      letterSpacing: '-0.19px',
      color: '#5D5D5D',
      '@media (min-width: 671px)': {
        fontSize: '1rem',
      },
    },
    label: {
      fontSize: '0.75rem',
      lineHeight: '125%',
      fontWeight: 400,
      color: '#A0A0A0',
      letterSpacing: '1px',
    },
  },
  defaults: {
    fontFamily:
      '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Inter", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"',
    fontSize: '16px',
    lineHeight: '125%',
    fontWeight: 400,
    gutterSpacing: '24px',
  },
  breakpoints: ['671px', '867px', '1050px', '1200px'],
  breakpointNames: {
    smallTablet: '671px',
    tablet: '867px',
    desktop: '1050px',
    giant: '1200px',
  },
  colors: {
    lime: '#c1fa6b',
    light: '#f6f8fa',
    medium: '#5f6486',
    body: '#333',
    purpleLight: '#A46BFA',
    purple: '#893ef8',
    limeDark: '#a5f828',
    blue: '#75E6DA',
    orange: '#f8833e',
    red: '#FB4570',
  },
  media: {
    smallTablet: '@media (min-width: 671px)',
    tablet: '@media (min-width: 867px)',
    desktop: '@media (min-width: 1050px)',
    giant: '@media (min-width: 1200px)',
  },
  space: [8, 16, 24, 32, 40, 72, 160],
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    rg: '1.5rem',
    md: '2rem',
    lg: '2.5rem',
    xl: '4.5rem',
    xxl: '8rem',
  },
  maxWidth: '1100px',
};

export default theme;
