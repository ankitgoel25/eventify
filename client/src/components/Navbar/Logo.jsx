import { Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <Flex align='center' gap='2'>
          <Image src='/images/Logo.svg' h={['2rem', '3rem']} alt='Logo' />
          <Text fontSize='25px' fontWeight='600'>
            Eventify
          </Text>
        </Flex>
      </a>
    </Link>
  );
};

export default Logo;
