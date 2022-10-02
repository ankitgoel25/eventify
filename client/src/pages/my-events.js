import { Box, Button, Flex } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MdAdd, MdEvent } from 'react-icons/md';
import EventCard from '../components/Event/Card.jsx';
import TopBorder from '../components/Landing/TopBorder.jsx';
import data from '../utils/data.js';

const MyEventsPage = () => {
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
      <Flex align='center' justify='space-between' mb='8'>
        <Flex w='fit-content' direction='column'>
          <Flex align='center' fontSize='3xl' fontWeight='600'>
            <span>My Events</span>
            <MdEvent style={{ marginLeft: 10 }} />
          </Flex>
          <TopBorder borderH='0.15rem' />
        </Flex>
        <Link href='/create' passHref>
          <a>
            <Button leftIcon={<MdAdd />}>Create Event</Button>
          </a>
        </Link>
      </Flex>
      <Flex my='4' justify='center' wrap='wrap'>
        {data.map((e, i) => (
          <EventCard key={i} id={i + 1} data={e} checkIn />
        ))}
      </Flex>
    </Box>
  );
};

export default MyEventsPage;
