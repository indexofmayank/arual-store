import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Divider,
  Button,
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);

  // Simulate fetching orders from an API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders'); // Replace with your API endpoint
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Box maxW="container.lg" mx="auto" mt={8} p={4}>
      <Heading as="h2" size="xl" mb={6}>
        Order History
      </Heading>

      {orders.length === 0 ? (
        <Text fontSize="xl">You have not placed any orders yet.</Text>
      ) : (
        <VStack align="stretch" spacing={6}>
          {orders.map((order) => (
            <Box
              key={order.id}
              p={6}
              borderWidth={1}
              borderRadius="md"
              boxShadow="sm"
              _hover={{ boxShadow: 'md' }}
            >
              <Flex justify="space-between" align="center">
                <HStack spacing={4}>
                  <Heading as="h3" size="md">
                    Order #{order.id}
                  </Heading>
                  <Text fontSize="lg" color="gray.500">
                    {new Date(order.date).toLocaleDateString()}
                  </Text>
                </HStack>
                <Button colorScheme="blue" size="sm">
                  View Details
                </Button>
              </Flex>

              <Divider my={4} />

              <VStack align="stretch" spacing={2}>
                {order.items.map((item) => (
                  <HStack key={item.id} justify="space-between">
                    <Text>{item.name}</Text>
                    <Text>${item.price.toFixed(2)}</Text>
                  </HStack>
                ))}
              </VStack>

              <Divider my={4} />

              <HStack justify="space-between">
                <Text fontWeight="bold">Total:</Text>
                <Text fontWeight="bold">${order.total.toFixed(2)}</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default OrderHistoryPage;
