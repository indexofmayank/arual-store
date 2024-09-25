// AboutUs.js
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Container,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <Heading as="h1" size="xl" mb={5} textAlign="center">
        About Us
      </Heading>
      <Text fontSize="lg" mb={5} textAlign="center">
        We are a passionate team dedicated to providing the best service.
      </Text>
      <Stack spacing={8}>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Our Mission
          </Heading>
          <Text>
            Our mission is to deliver quality products and services that
            meet our customers' needs and exceed their expectations.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Our Team
          </Heading>
          <SimpleGrid columns={[1, null, 3]} spacing={10}>
            <VStack spacing={3} textAlign="center">
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
              />
              <Text fontWeight="bold">John Doe</Text>
              <Text>CEO</Text>
            </VStack>
            <VStack spacing={3} textAlign="center">
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
              />
              <Text fontWeight="bold">Jane Smith</Text>
              <Text>CTO</Text>
            </VStack>
            <VStack spacing={3} textAlign="center">
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
              />
              <Text fontWeight="bold">Alex Johnson</Text>
              <Text>COO</Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
};

export default AboutUs;
