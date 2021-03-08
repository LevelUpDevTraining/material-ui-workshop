import { useState } from 'react';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function Drawer() {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div className={classes.list}>
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
            <ListItem button onClick={() => router.push('/cards')}>
              <ListItemText primary={'Cards'} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
