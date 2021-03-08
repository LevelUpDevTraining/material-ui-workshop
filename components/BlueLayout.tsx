import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <Box bgcolor={blue[400]} width="100vw" height="100vh">
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Box className={classes.root} p={10}>
          {children}
        </Box>
      </Grid>
    </Box>
  );
}
