import React from 'react';
import { Box, VStack, Text, CloseButton } from '@chakra-ui/react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Box
      width={{ base: 'full', md: '250px' }}
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      bg="gray.700"
      color="white"
      p={4}
      position="fixed"
      height="100%"
    >
      <CloseButton onClick={onClose} display={{ base: 'flex', md: 'none' }} />
      <VStack align="start" spacing={4}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Services</Text>
        <Text>Contact</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;
