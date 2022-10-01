import {
  IconButton,
  Button,
  Flex,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  Text,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoWallet } from 'react-icons/io5';

const NavBar = ({
  executeProcessScroll,
  executeAboutScroll,
  executeFooterScroll,
}) => {
  const [sticky, setSticky] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const navigate = useNavigate();

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 15 ? 'is-sticky' : '';
    setSticky(stickyClass);
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  return (
    <Flex
      py='3'
      px={['8', '16', '20', '52']}
      my={['2', '4']}
      mb={['0', '0', '0', '0', '4']}
      justifyContent='space-between'
      alignItems='center'
      position='sticky'
      top='0'
      zIndex='10'
      bgColor='brand.100'
      boxShadow={
        sticky === 'is-sticky' ? '0px 19px 14px -17px rgba(0,0,0,0.1)' : 'none'
      }
    >
      <Flex align='center' gap='2'>
        <Image src='/images/Logo.svg' h={['2rem', '3rem']} alt='Logo' />
        <Text fontSize='25px' fontWeight='600'>
          Eventify
        </Text>
      </Flex>
      <Flex alignItems='center' display={['none', 'none', 'flex']} ml='auto'>
        <Box
          mr={['1', '4', '4', '8', '12']}
          fontWeight='bold'
          cursor='pointer'
          _hover={{ color: 'brand.550' }}
          onClick={executeProcessScroll}
        >
          Explore Events
        </Box>
        <Box
          mr={['1', '4', '4', '8', '12']}
          fontWeight='bold'
          cursor='pointer'
          _hover={{ color: 'brand.550' }}
          onClick={executeAboutScroll}
        >
          About Us
        </Box>
        {/* <Box
          mr={['1', '4', '4', '8', '12']}
          fontWeight='bold'
          cursor='pointer'
          _hover={{ color: 'brand.550' }}
          onClick={executeFooterScroll}
        >
          Contact Us
        </Box> */}
        {true ? (
          <Button
            onClick={async () => {
              window.open(
                `${process.env.REACT_APP_SERVER_URL}/auth/google`,
                '_self',
              );
            }}
            // isLoading={isFetching || isLoading}
            styles={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IoWallet style={{ marginRight: '10px' }} />
            Connect Wallet
          </Button>
        ) : (
          <Button
            onClick={() => {
              navigate('/dashboard');
            }}
            // isLoading={isFetching}
          >
            Dashboard
          </Button>
        )}
      </Flex>
      <IconButton
        aria-label='Search database'
        icon={<GiHamburgerMenu />}
        onClick={onOpen}
        display={['flex', 'flex', 'none']}
      />
      <Drawer
        placement='right'
        size='xs'
        onClose={onClose}
        isOpen={isOpen}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton top='4' _focus={{}} />
          <DrawerHeader
            borderBottomWidth='1px'
            color='brand.500'
            fontSize={['lg', 'lg', 'xl']}
          >
            EnormoQB
          </DrawerHeader>
          <DrawerBody fontSize={['sm', 'md', 'md']}>
            <Box
              mb='3'
              cursor='pointer'
              _hover={{ color: 'brand.550' }}
              onClick={() => {
                executeProcessScroll();
                onClose();
              }}
            >
              Explore Events
            </Box>
            <Box
              mb='3'
              cursor='pointer'
              _hover={{ color: 'brand.550' }}
              onClick={() => {
                executeAboutScroll();
                onClose();
              }}
            >
              About Us
            </Box>
            {/* <Box
              mb='4'
              cursor='pointer'
              _hover={{ color: 'brand.550' }}
              onClick={() => {
                executeFooterScroll();
                onClose();
              }}
            >
              Contact Us
            </Box> */}
            {true ? (
              <Button
                onClick={async () => {
                  window.open(
                    `${process.env.REACT_APP_SERVER_URL}/auth/google`,
                    '_self',
                  );
                }}
                // isLoading={isFetching || isLoading}
                styles={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IoWallet style={{ marginRight: '10px' }} />
                Login
              </Button>
            ) : (
              <Button
                onClick={() => navigate('/dashboard')}
                isLoading={isFetching}
              >
                Dashboard
              </Button>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default NavBar;
