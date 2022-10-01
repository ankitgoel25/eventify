import { Box, Flex } from '@chakra-ui/react';
import EventCard from '../components/Event/Card.jsx';
import data from '../utils/data.js';

const ExplorePage = () => {
  return (
    <Box mx='10%'>
      <Flex my='4' justify='center' wrap='wrap'>
        {data.map((e, i) => (
          <EventCard key={i} data={e} present />
        ))}
      </Flex>
    </Box>
  );
};

export default ExplorePage;
