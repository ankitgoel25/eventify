import { Box, Flex } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MdEvent } from 'react-icons/md';
import EventCard from '../components/Event/Card.jsx';
import TopBorder from '../components/Landing/TopBorder.jsx';
import data from '../utils/data.js';

const RsvpPage = () => {
  const address = useAddress();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!address) {
      router.push('/explore');
    } else {
      setIsLoading(false);
    }
  }, [address]);

  if (isLoading) {
    return null;
  }

  return (
    <Box mx='10%' mt='6'>
      <Flex w='fit-content' direction='column' mb='8'>
        <Flex align='center' fontSize='3xl' fontWeight='600'>
          <span>My RSVPs</span>
          <MdEvent style={{ marginLeft: 10 }} />
        </Flex>
        <TopBorder borderH='0.15rem' />
      </Flex>
      <Flex my='4' justify='center' wrap='wrap'>
        {data.map((e, i) => (
          <EventCard key={i} id={i + 1} data={e} />
        ))}
      </Flex>
    </Box>
  );
};

export default RsvpPage;
