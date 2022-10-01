import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { MdOutlineAccessTime, MdOutlineLocationOn } from 'react-icons/md';

const EventCard = ({ data }) => {
  return (
    <Box
      position='relative'
      w='31%'
      h='380px'
      mr='auto'
      mb='28px'
      bgImage={data.pic}
      bgSize='cover'
      bgPosition='bottom'
      display='flex'
      justifyContent='center'
      borderRadius='10px'
    >
      <Box
        position='absolute'
        bottom='12px'
        bg='#FFFFFFE9'
        w='94%'
        borderRadius='10px'
        p='5px 15px 15px'
      >
        <Text fontSize='2xl' fontWeight='600'>
          {data.title}
        </Text>
        <Flex justify='space-between'>
          <Text fontWeight='600'>{data.date}</Text>
          <Flex alignItems='center' gap='8px' fontSize='14px'>
            <MdOutlineLocationOn />
            <span>{data.venue}</span>
          </Flex>
        </Flex>
        <Flex alignItems='center' gap='8px' fontSize='14px'>
          <MdOutlineAccessTime />
          <span>{data.time}</span>
        </Flex>
        <Flex align='flex-end' justify='space-between' mt='25px'>
          <Flex direction='column'>
            <Text fontWeight='bold' fontSize='20px' lineHeight='1'>
              {data.attendees} Attending
            </Text>
            <Text fontSize='12px' lineHeight='1.1' mt='0.5'>
              out of {data.maxCap}
            </Text>
          </Flex>
          <Link href='/event/abc' passHref>
            <a>
              <Button>Attend</Button>
            </a>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default EventCard;
