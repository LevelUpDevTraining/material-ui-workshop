import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { blue } from '@material-ui/core/colors';

export default function TestContainer() {
  return (
    <Container fixed>
      <Box bgcolor={blue[400]} width="100%" height="100vh">
        This is a container
      </Box>
    </Container>
  );
}
