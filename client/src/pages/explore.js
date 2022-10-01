import Navbar from '../components/Navbar';
import { Box, Wrap, Flex, Heading, Text, Button } from '@chakra-ui/react';
import data from '../data.jsx';
import Tag from '../components/Tag.jsx';
import TagDivider from '../components/TagDivider.jsx';

const ExplorePage = () => {
  return (
    <Box>
      <Wrap mt='3%' mb='3%' spacing='30px' justify='center'>
        {data.map((e, i) => (
          <Box
            w='450px'
            h='400px'
            bgImage={e.pic}
            bgSize='cover'
            bgPosition='center'
            display='flex'
            justifyContent='center'
            borderRadius='10px'
          >
            <Box
              bg='brand.100'
              h='200px'
              w='400px'
              mt='40%'
              borderRadius='10px'
              border='1px'
              p='5px 15px'
            >
              <Heading mb='5px'>{e.title}</Heading>
              <Text fontWeight='bold' mb='15px'>
                {e.date}
              </Text>
              <Flex wrap='wrap' alignItems='center'>
                <Tag content={e.time} />
                <TagDivider />
                <Tag content={e.venue} />
              </Flex>
              <Flex align='flex-end' justify='space-between' mt='25px'>
                <Flex direction='column'>
                  <Text fontWeight='bold' fontSize='20px' lineHeight='1'>
                    {e.attendees} Attending
                  </Text>
                  <Text fontSize='12px' lineHeight='1.1' mt='0.5'>
                    out of {e.maxCap}
                  </Text>
                </Flex>
                <Button>Attend</Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Wrap>
    </Box>
  );
};

export default ExplorePage;
