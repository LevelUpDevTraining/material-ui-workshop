import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    list: {
      width: 250,
    },
  })
);

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor={'left'}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div className={classes.list} role="presentation">
          <Box textAlign="center" p={2}>
            Components
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => router.push('/container')}>
              <ListItemText primary={'Container'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/grid')}>
              <ListItemText primary={'Grid'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/box')}>
              <ListItemText primary={'Box'} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
