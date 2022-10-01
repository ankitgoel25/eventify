import { Flex } from '@chakra-ui/react';
import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

const Footer = ({ footerRef }) => {
  return (
    <Flex
      ref={footerRef}
      flexDir='column'
      alignItems='center'
      color='brand.300'
      fontSize='sm'
      bgColor='brand.600'
      mt='8'
    >
      <Flex
        alignItems='center'
        w='100%'
        px={['7', '10', '16']}
        py={['6', '8', '10']}
      >
        <Flex
          w='50%'
          flexDir='column'
          justifyContent='space-between'
          alignItems='center'
          mr={['4', '4', null]}
        >
          <Flex fontSize={['md', 'lg']} fontWeight='semibold' m='2'>
            EnormoQB
          </Flex>
          <Flex fontSize={['sm', 'md']} textAlign='center'>
            Revolutionizing Examination Systems
          </Flex>
          <Flex
            mt={['0', '2', '4']}
            py='4'
            justifyContent='space-between'
            w={['100%', '70%', '60%', '45%', '30%']}
          >
            <FaFacebookF size={20} style={{ cursor: 'pointer' }} />
            <FaEnvelope size={20} style={{ cursor: 'pointer' }} />
            <FaInstagram size={20} style={{ cursor: 'pointer' }} />
            <FaLinkedin size={20} style={{ cursor: 'pointer' }} />
            <FaYoutube size={20} style={{ cursor: 'pointer' }} />
          </Flex>
        </Flex>
        <Flex
          w='50%'
          flexDir='column'
          justifyContent='space-between'
          alignItems='center'
        >
          <Flex
            my='1'
            _hover={{ borderBottom: '1px solid #DEE3F5', cursor: 'pointer' }}
          >
            About
          </Flex>
          <Flex
            my='1'
            _hover={{ borderBottom: '1px solid #DEE3F5', cursor: 'pointer' }}
          >
            Terms
          </Flex>
          <Flex
            my='1'
            _hover={{ borderBottom: '1px solid #DEE3F5', cursor: 'pointer' }}
          >
            Policy
          </Flex>
          <Flex
            my='1'
            _hover={{ borderBottom: '1px solid #DEE3F5', cursor: 'pointer' }}
          >
            Request a demo
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w='100%'
        bgColor='blue.100'
        color='brand.600'
        p='2'
        justifyContent='center'
      >
        Copyright © 2022 | EnormoQB
      </Flex>
    </Flex>
  );
};

export default Footer;
