import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MediaCard from '../components/Cards/MediaCard';
import Layout from '../components/Layout';

const mediaCards = [
  {
    image: '/img/laptop-coffee.jpeg',
    title: 'Laptop Coffee',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum distinctio veritatis numquam omnis maiores dicta ratione consectetur earum voluptatibus soluta optio quos, labore, iure ea maxime vero reiciendis dolorum.',
  },
  {
    image: '/img/laptop-coffee.jpeg',
    title: 'Laptop Coffee',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum distinctio veritatis numquam omnis maiores dicta ratione consectetur earum voluptatibus soluta optio quos, labore, iure ea maxime vero reiciendis dolorum.',
  },
  {
    image: '/img/laptop-coffee.jpeg',
    title: 'Laptop Coffee',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum distinctio veritatis numquam omnis maiores dicta ratione consectetur earum voluptatibus soluta optio quos, labore, iure ea maxime vero reiciendis dolorum.',
  },
  {
    image: '/img/laptop-coffee.jpeg',
    title: 'Laptop Coffee',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum distinctio veritatis numquam omnis maiores dicta ratione consectetur earum voluptatibus soluta optio quos, labore, iure ea maxime vero reiciendis dolorum.',
  },
];

export default function Cards() {
  return (
    <Layout>
      <Box p={5} pt={15} minHeight="100vh">
        <Grid container spacing={5}>
          {mediaCards.map((mediaCard, i) => {
            return (
              <Grid key={i} item>
                <MediaCard {...mediaCard} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
}
