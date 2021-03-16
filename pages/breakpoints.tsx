import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import React from 'react';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    tiny: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    // tablet: true;
    // laptop: true;
    // desktop: true;
  }
}

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      tiny: 300,
      sm: 550,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

interface Props {
  children: React.ReactNode;
  breakpoint: string;
}

function DisplayBox({ children, breakpoint }: Props) {
  const display = {
    xs: 'none',
    tiny: 'none',
    sm: 'none',
    md: 'none',
    lg: 'none',
    xl: 'none',
  };
  display[breakpoint] = 'block';
  return <Box display={display}>{children}</Box>;
}

export default function BoxTest() {
  const breakpoints = ['xs', 'tiny', 'sm', 'md', 'lg', 'xl'];
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
        fontSize="64px"
      >
        <Box>
          {breakpoints.map((breakpoint) => (
            <DisplayBox breakpoint={breakpoint}>{breakpoint}</DisplayBox>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
