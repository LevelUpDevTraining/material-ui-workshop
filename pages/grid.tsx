import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Layout from '../components/Layout';

export default function TestingGrid() {
  return (
    <Layout>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Paper>
                <Box width={50} height={25}>
                  Logo
                </Box>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <Box width={50} height={25}>
                  Login
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={8}>
              <Paper>
                <Box width="100%" height={500}>
                  Blog Posts
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper>
                <Box width="100%" height={500}>
                  Links
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
