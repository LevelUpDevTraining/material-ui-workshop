import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export default function BoxTest() {
  return (
    <Box p={{ xs: 2, sm: 3, md: 5 }}>
      <Paper>
        <Box p={5}>
          <div>Hello</div>
          <Box pt={5} textAlign="center">
            World
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
