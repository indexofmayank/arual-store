import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
  useDisclosure,
  Collapse,
  VStack,
  Link,
  useBreakpointValue,
  Img,
  HStack,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="teal.500" color="white" p={4}>
      <Flex align="center" justify="space-between">
        <Img src='https://via.placeholder.com/130X45?text=ARULA' />
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          aria-label="Toggle Navigation"
          variant="outline"
          colorScheme="whiteAlpha"
        />
      </Flex>
      <Collapse in={isOpen}>
        <VStack spacing={4} mt={4}>
          <Link href={`/`}>Home</Link>
          <Link href='#'>Crouses</Link>
          <Link href={`/testimionial`}>Testimonials</Link>
          <Link href={`/blogpost`}>Blog</Link>
          <Link href={`/aboutus`}>About</Link>
          <Link href={`/orderhistory`}>Bookings</Link>
        </VStack>
        <HStack>
          <Button >Login</Button>
          <Button>Sign up</Button>
        </HStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
