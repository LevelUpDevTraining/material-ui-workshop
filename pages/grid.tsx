import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            1
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            2
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            3
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            4
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            5
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            6
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            7
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            8
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            9
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            10
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            11
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={8}>
            12
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
