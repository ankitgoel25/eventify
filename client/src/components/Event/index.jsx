import { Box, Button, Flex, Text } from '@chakra-ui/react';

const Event = ({ id }) => {
  const isOneDay = false;

  return (
    <Box>
      <Box
        position='relative'
        bgImage='/images/event-bg1.jpg'
        bgSize='cover'
        w='full'
        h='40vh'
        bgPosition='center'
      >
        <Flex
          position='absolute'
          direction='column'
          align='center'
          bottom={isOneDay ? '-30px' : '-46px'}
          left='10%'
          bg='#FFFFFFD9'
          pt='4'
          px='4'
          borderRadius='10px'
          boxShadow='md'
        >
          <Text fontSize='7xl' fontWeight='600' lineHeight='64px'>
            25
          </Text>
          <Text
            fontSize='xl'
            fontWeight='500'
            lineHeight={isOneDay ? 'normal' : '22px'}
            mt='1'
          >
            Oct 2022
          </Text>
          {!isOneDay && <Text fontSize='sm'>onwards</Text>}
        </Flex>
      </Box>
      <Flex direction='column' mx='10%' mt={isOneDay ? '12' : '16'} mb='10'>
        <Flex align='start' justify='space-between'>
          <Box>
            <Text fontSize='4xl' fontWeight='600'>
              Event Name
            </Text>
            {/* <Text fontSize='lg' fontWeight='500'>
              12pm - 8pm
            </Text> */}
          </Box>
          <Box>
            <Button>Register</Button>
          </Box>
        </Flex>
        <Text fontSize='md' fontWeight='400' mt='4' textAlign='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          explicabo molestias quas enim accusantium ducimus nostrum reiciendis
          consequuntur, vel consectetur, magni voluptatum error cupiditate ut
          excepturi necessitatibus ratione neque. Pariatur quibusdam
          consectetur, quaerat inventore illum molestiae et dolor dolorum culpa
          magni sed reprehenderit sint debitis sunt nobis ab vel perspiciatis
          voluptas corrupti ullam, aliquid, dolores eaque. Ab rem sequi eos
          deserunt velit vitae repudiandae, vero hic saepe repellendus quos
          inventore reprehenderit magni voluptates odio ratione unde consequatur
          vel placeat reiciendis corrupti veniam? Sit quam aliquam aliquid
          recusandae consequuntur id consequatur rerum totam, vel impedit quasi
          blanditiis iste assumenda quibusdam nobis, nisi vitae beatae
          temporibus perspiciatis inventore! Nemo officia nisi unde labore
          similique quasi rem esse commodi reiciendis. Nesciunt, aliquid
          corporis.
        </Text>
        <Flex mt='4' gap='10px'>
          <Text fontSize='lg' fontWeight='500'>
            Event Timings:
          </Text>
          <Text fontSize='lg' fontWeight='400'>
            25 Oct 2022, 10am - 26 Oct 2022 9pm
          </Text>
        </Flex>
        <Box mt='4' gap='10px'>
          <Text fontSize='lg' fontWeight='600'>
            Having any doubts?
          </Text>
          <Text fontSize='md' fontWeight='400'>
            Contact the organiser at event@gmail.com
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Event;
