import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Drawer from './Drawer';
import Search from './Search';
import Account from './Account';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <Drawer />
          <Box flexGrow={1} display={{ xs: 'none', sm: 'block' }}>
            <Typography variant="h6">Material UI Workshop</Typography>
          </Box>
          <Search />
          <Account />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
