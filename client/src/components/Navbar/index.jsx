import { useState, useEffect } from 'react';
import { useMetamask, useDisconnect, useAddress } from '@thirdweb-dev/react'
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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoChevronDown, IoWallet } from 'react-icons/io5';
import Logo from './Logo';
import TopBorder from '../Landing/TopBorder';
import Profile from './Profile';

const Navbar = () => {
  const [sticky, setSticky] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

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
        px={['8', '16', '20', '10%']}
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
              <Text
                fontWeight='bold'
                cursor='pointer'
                fontSize='18px'
                _hover={{ color: 'brand.550' }}
              >
                Explore
              </Text>
            </a>
          </Link>
          {address && (
            <Menu placement='bottom-end'>
              <MenuButton>
                <Flex
                  ml={['1', '4', '4', '8', '12']}
                  fontWeight='bold'
                  cursor='pointer'
                  _hover={{ color: 'brand.550' }}
                  align='center'
                  fontSize='18px'
                >
                  <span>Events</span>
                  <IoChevronDown style={{ marginLeft: 5 }} />
                </Flex>
              </MenuButton>
              <MenuList minW='160px'>
                <Link href='/my-events' passHref>
                  <a>
                    <MenuItem>My Events</MenuItem>
                  </a>
                </Link>
                <Link href='/my-rsvps' passHref>
                  <a>
                    <MenuItem>My RSVPs</MenuItem>
                  </a>
                </Link>
              </MenuList>
            </Menu>
          )}

          {!address ? (
            <Button
              ml={['1', '4', '4', '8', '12']}
              onClick={connectWithMetamask}
            >
              <Flex align='center' justify='center'>
                <IoWallet style={{ marginRight: '10px' }} />
                Connect Wallet
              </Flex>
            </Button>
          ) : (
            <Box ml={['1', '4', '4', '8', '12']}>
              <Profile onClick={disconnect} />
            </Box>
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
              Eventify
            </DrawerHeader>
            <DrawerBody fontSize={['sm', 'md', 'md']}>
              <Box mb='3' cursor='pointer' _hover={{ color: 'brand.550' }}>
                Explore Events
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default Navbar;
