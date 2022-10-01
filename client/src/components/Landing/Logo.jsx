import { Flex, Image, Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Flex align='center' gap='2'>
      <Image src='/images/Logo.svg' h={['2rem', '3rem']} alt='Logo' />
      <Text fontSize='25px' fontWeight='600'>
        Eventify
      </Text>
    </Flex>
  );
};

export default Logo;
