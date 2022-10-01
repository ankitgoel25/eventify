import { Box, Flex } from '@chakra-ui/react';
import EventCard from '../components/Event/Card.jsx';
import data from '../utils/data.js';
import { MdOutlineExplore } from 'react-icons/md';
import TopBorder from '../components/Landing/TopBorder.jsx';

const ExplorePage = () => {
  return (
    <Box mx='10%' mt='6'>
      <Flex w='fit-content' direction='column' mb='8'>
        <Flex align='center' fontSize='3xl' fontWeight='600'>
          <span>Explore Events</span>
          <MdOutlineExplore style={{ marginLeft: 8 }} />
        </Flex>
        <TopBorder borderH='0.15rem' />
      </Flex>
      <Flex my='4' justify='center' wrap='wrap'>
        {data.map((e, i) => (
          <EventCard key={i} data={e} present />
        ))}
      </Flex>
    </Box>
  );
};

export default ExplorePage;
