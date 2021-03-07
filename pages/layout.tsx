import Layout from '../components/Layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

export default function Page() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box maxWidth="100%" minHeight="100vh" py={20}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={8}>
                <Box p={2}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sed omnis voluptate natus nam quo, doloremque placeat, ut
                    tempore ea eveniet nobis ipsa dignissimos quos accusantium,
                    quas consequuntur? Iure, minima corporis.
                  </p>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper elevation={8}>
                <Box p={2}>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nostrum officia nihil fuga labore, natus ducimus deserunt
                    velit placeat obcaecati soluta ex pariatur minus sequi
                    eveniet deleniti amet iusto, enim provident!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nostrum officia nihil fuga labore, natus ducimus deserunt
                    velit placeat obcaecati soluta ex pariatur minus sequi
                    eveniet deleniti amet iusto, enim provident!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nostrum officia nihil fuga labore, natus ducimus deserunt
                    velit placeat obcaecati soluta ex pariatur minus sequi
                    eveniet deleniti amet iusto, enim provident!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nostrum officia nihil fuga labore, natus ducimus deserunt
                    velit placeat obcaecati soluta ex pariatur minus sequi
                    eveniet deleniti amet iusto, enim provident!
                  </p>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
