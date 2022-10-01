import { Button, Flex, Box, Image } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex
      mx={['8', '12', '20', '36', '52']}
      my={['4', '4', '4', '2', '6']}
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
          mt={['8', '10', '12', '16']}
          textAlign={['center', 'center', 'left']}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          repellendus fugiat obcaecati nesciunt delectus autem. Excepturi,
          error!
        </Flex>

        <Button
          w='fit-content'
          mt={['8', '10', '12', '12', '16']}
          fontSize={['small', 'md']}
          // onClick={() => navigate('/anonymously')}
        >
          Contribute Anonymously
        </Button>
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
