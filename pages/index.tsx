import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item>
          <Paper elevation={8}>
            <Box p={5}>
              <Box p={1}>
                <Link href="/container">Container</Link>
              </Box>
              <Box p={1}>
                <Link href="/grid">Grid</Link>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
