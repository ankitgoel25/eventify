import { Box, Heading, Center } from '@chakra-ui/react';
import CreateEventForm from '../components/CreateEventForm';

const EventPage = () => {
  return (
    <Box mx={['8', '16', '20', '52']}>
      <Heading as='h1' fontSize='4xl' fontWeight='bold' mb={10}>
        <Center>Create Event</Center>
      </Heading>
      <CreateEventForm />
    </Box>
  );
};

export default EventPage;
