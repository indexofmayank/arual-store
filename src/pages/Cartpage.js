import React, { useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  HStack,
  Divider,
  CloseButton,
} from '@chakra-ui/react';

const Cartpage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "React for Beginners",
      price: 49.99,
      image: "https://example.com/course-image1.jpg",
    },
    {
      id: 2,
      title: "Mastering Node.js",
      price: 69.99,
      image: "https://example.com/course-image2.jpg",
    },
  ]);

  const handleRemoveCourse = (courseId) => {
    const updatedCart = cartItems.filter((course) => course.id !== courseId);
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, course) => total + course.price, 0).toFixed(2);
  };

  return (
    <Box maxW="container.lg" mx="auto" mt={8} p={4}>
      <Heading as="h2" size="xl" mb={6}>
        My Cart
      </Heading>

      {cartItems.length === 0 ? (
        <Text fontSize="xl">Your cart is empty</Text>
      ) : (
        <VStack align="stretch" spacing={4}>
          {cartItems.map((course) => (
            <Flex
              key={course.id}
              p={4}
              borderWidth={1}
              borderRadius="md"
              justify="space-between"
              align="center"
            >
              <HStack spacing={4}>
                <Image
                  src={course.image}
                  boxSize="100px"
                  objectFit="cover"
                  alt={course.title}
                />
                <Box>
                  <Heading as="h3" size="md">
                    {course.title}
                  </Heading>
                  <Text fontSize="lg">${course.price}</Text>
                </Box>
              </HStack>
              <CloseButton onClick={() => handleRemoveCourse(course.id)} />
            </Flex>
          ))}

          <Divider />

          <HStack justify="space-between" w="full">
            <Text fontSize="2xl" fontWeight="bold">
              Total: ${getTotalPrice()}
            </Text>
            <Button colorScheme="blue" size="lg">
              Proceed to Checkout
            </Button>
          </HStack>
        </VStack>
      )}
    </Box>
  );
};

export default Cartpage;
