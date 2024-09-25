import React, { useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

const Authpage = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Mock function to simulate login/signup (you can integrate real backend APIs)
  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful');
    }, 1000);
  };

  const handleSignup = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Signup successful');
    }, 1000);
  };

  return (
    <Flex align="center" justify="center" minH="100vh" bg="gray.50">
      <Box bg="white" p={6} rounded="md" shadow="md" width="400px">
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>

          <TabPanels>
            {/* Login Form */}
            <TabPanel>
              <Heading as="h3" size="lg" mb={4}>
                Login
              </Heading>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="Enter your email" />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Enter your password" />
                </FormControl>

                <Button
                  isLoading={isLoading}
                  colorScheme="blue"
                  size="lg"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Stack>
              <Text fontSize="sm" color="gray.500" mt={4}>
                Forgot your password?
              </Text>
            </TabPanel>

            {/* Signup Form */}
            <TabPanel>
              <Heading as="h3" size="lg" mb={4}>
                Signup
              </Heading>
              <Stack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" placeholder="Enter your full name" />
                </FormControl>

                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="Enter your email" />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Create a password" />
                </FormControl>

                <Button
                  isLoading={isLoading}
                  colorScheme="blue"
                  size="lg"
                  onClick={handleSignup}
                >
                  Signup
                </Button>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Authpage;
