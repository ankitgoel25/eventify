import { useState, useEffect } from 'react';
import Link from 'next/link';
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
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoWallet } from 'react-icons/io5';
import Logo from './Logo';
import TopBorder from '../Landing/TopBorder';
import Profile from './Profile';

const Navbar = () => {
  const [sticky, setSticky] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const isSticky = () => {
      setSticky(Boolean(window.scrollY >= 15));
    };

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  return (
    <>
      <TopBorder borderH='0.5rem' />
      <Flex
        py='4'
        px={['8', '16', '20', '52']}
        justifyContent='space-between'
        alignItems='center'
        position='sticky'
        top='0'
        zIndex='10'
        bgColor='brand.100'
        boxShadow={sticky ? '0px 19px 14px -17px rgba(0,0,0,0.1)' : 'none'}
      >
        <Logo />
        <Flex alignItems='center' display={['none', 'none', 'flex']} ml='auto'>
          <Link href='/explore' passHref>
            <a>
              <Box
                mr={['1', '4', '4', '8', '12']}
                fontWeight='bold'
                cursor='pointer'
                _hover={{ color: 'brand.550' }}
              >
                Explore Events
              </Box>
            </a>
          </Link>
          <Link href='/myEvents' passHref>
            <a>
              <Box
                mr={['1', '4', '4', '8', '12']}
                fontWeight='bold'
                cursor='pointer'
                _hover={{ color: 'brand.550' }}
              >
                My Events
              </Box>
            </a>
          </Link>
          {!isLoggedIn ? (
            <Button
              onClick={() => setIsLoggedIn(true)}
              // isLoading={isFetching || isLoading}
            >
              <Flex align='center' justify='center'>
                <IoWallet style={{ marginRight: '10px' }} />
                Connect Wallet
              </Flex>
            </Button>
          ) : (
            <Profile onClick={() => setIsLoggedIn(false)} />
          )}
        </Flex>
        <IconButton
          aria-label='Hamburger'
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
              <Box mb='3' cursor='pointer' _hover={{ color: 'brand.550' }}>
                Explore Events
              </Box>
              <Box mb='3' cursor='pointer' _hover={{ color: 'brand.550' }}>
                About Us
              </Box>
              {true ? (
                <Button
                  onClick={() => {}}
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
                <Button onClick={() => {}} isLoading={isFetching}>
                  Dashboard
                </Button>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default Navbar;
