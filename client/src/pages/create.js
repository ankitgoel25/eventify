import { Box, Heading, Center } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CreateEventForm from '../components/CreateEventForm';

const CreateEventPage = () => {
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
    <Box mx={['8', '16', '20', '52']}>
      <Heading as='h1' fontSize='4xl' fontWeight='bold' mb={10}>
        <Center>Create Event</Center>
      </Heading>
      <CreateEventForm />
    </Box>
  );
};

export default CreateEventPage;
