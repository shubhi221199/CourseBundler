import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLoginBoxLine, RiMenu5Fill } from 'react-icons/ri';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Link,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { CgProfile } from 'react-icons/cg';

const LinkBtn = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuth = true;

  const user = {
    role: 'admin',
  };

  const logoutFun = () => {
    console.log('logout');
    onClose();
  };

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width="12"
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top="4"
        left="4"
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>COURSE HANDLER</DrawerHeader>

          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkBtn onClose={onClose} url="/" title="Home" />
              <LinkBtn onClose={onClose} url="/about" title="About" />
              <LinkBtn onClose={onClose} url="/contact" title="Contact Us" />
              <LinkBtn
                // onClose={onClose}
                url="courses"
                title="Browse All Courses"
              />

                <Link to='/courses'>
    <Button onClick={onClose} variant={'ghost'}>Browse All Courses</Button>
  </Link>
               
              <LinkBtn
                onClose={onClose}
                url="/request"
                title="Request a Course"
              />

              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuth ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>

                        <Button onClick={logoutFun} variant={'ghost'}>
                          <RiLoginBoxLine />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard">
                          <Button variant={'ghost'} colorScheme="purple">
                            <RiDashboardFill style={{ margin: '4' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>

                    <p>OR</p>

                    <Link onClick={onClose} to="/register">
                      <Button colorScheme={'yellow'}>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
