import { Button, Flex, Box, Image } from '@chakra-ui/react';
import { MdOutlineExplore } from 'react-icons/md';
import Link from 'next/link';

const Hero = () => {
  return (
    <Flex
      mx={['8', '12', '20', '36', '52']}
      mt={['4', '4', '4', '2', '14']}
      mb={['4', '4', '4', '2', '20']}
      justifyContent='space-between'
      flexDirection={['column', 'column', 'row']}
    >
      <Flex
        flexDirection='column'
        w={['100%', '100%', '45%', '40%']}
        alignItems={['center', 'center', 'flex-start']}
      >
        <Box
          fontSize={['xl', '2xl', '3xl', '4xl']}
          fontWeight='bold'
          mt={['2', '4', '8', '12']}
          textAlign={['center', 'center', 'left']}
        >
          Organising Events. Made
          <span className='highlight'> Simplified.</span>
        </Box>
        <Flex
          fontSize={['small', 'md', 'lg', 'xl']}
          mt={['8', '10', '12', '10']}
          textAlign={['center', 'center', 'left']}
        >
          Revolutionizing Event Management System with Eventify!
        </Flex>

        <Link href='/explore' passHref>
          <a>
            <Button
              w='fit-content'
              mt={['8', '10', '12', '12', '14']}
              fontSize={['small', 'lg']}
            >
              <MdOutlineExplore size='24px' style={{ marginRight: '10px' }} />
              Explore Events
            </Button>
          </a>
        </Link>
      </Flex>
      <Image
        src='/images/events.svg'
        alt='Logo'
        w={['80%', '80%', '55%', '50%']}
        alignSelf={['center', 'center', 'normal']}
      />
    </Flex>
  );
};

export default Hero;
