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
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { useNavigate } from 'react-router-dom';
import { GrGoogle } from 'react-icons/gr';
// import Logo from '../../assets/mainLogo.svg';

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
      px={['8', '16', '20', '32']}
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
      {/* <Image
        src={Logo}
        h={['4rem', '5rem']}
        w={['10rem', '12rem']}
        alt='Logo'
      /> */}
      <Flex alignItems='center' display={['none', 'none', 'flex']} ml='auto'>
        <Box
          mr={['1', '4', '4', '8', '12']}
          fontWeight='bold'
          cursor='pointer'
          _hover={{ color: 'blue.400' }}
          onClick={executeProcessScroll}
        >
          Process Flow
        </Box>
        <Box
          mr={['1', '4', '4', '8', '12']}
          fontWeight='bold'
          cursor='pointer'
          _hover={{ color: 'blue.400' }}
          onClick={executeAboutScroll}
        >
          About Us
        </Box>
        <Box
          mr={['1', '4', '4', '8', '12']}
          fontWeight='bold'
          cursor='pointer'
          _hover={{ color: 'blue.400' }}
          onClick={executeFooterScroll}
        >
          Contact Us
        </Box>
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
            <GrGoogle style={{ marginRight: '10px' }} />
            Login
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
              _hover={{ color: 'blue.400' }}
              onClick={() => {
                executeProcessScroll();
                onClose();
              }}
            >
              Process Flow
            </Box>
            <Box
              mb='3'
              cursor='pointer'
              _hover={{ color: 'blue.400' }}
              onClick={() => {
                executeAboutScroll();
                onClose();
              }}
            >
              About Us
            </Box>
            <Box
              mb='4'
              cursor='pointer'
              _hover={{ color: 'blue.400' }}
              onClick={() => {
                executeFooterScroll();
                onClose();
              }}
            >
              Contact Us
            </Box>
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
                <GrGoogle style={{ marginRight: '10px' }} />
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
