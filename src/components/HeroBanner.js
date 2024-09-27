import React, { useEffect, useState } from "react";
import { Box, Text, Button, SimpleGrid, Image, VStack } from "@chakra-ui/react";
import { image } from "framer-motion/client";

function HeroBanner() {

  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/products/image/only`);
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        const {data} = await response.json();
        setImages(data);
      } catch (error) {
        
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  console.log(images);

  return (
    <Box
      background="linear-gradient(to right, #022c9a, #0461cf)"
      padding="6"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      color="white"
    >
      {/* Text Content */}
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Austim APPROACHING?
      </Text>
      <Text fontSize="xl">
        Stay Ahead With the Latest Aurla for Austim porgramme!
      </Text>

      {/* Images Grid */}
      <SimpleGrid columns={[2, 2, 4]} spacing="4" my="6">
        <Image
          src='https://via.placeholder.com/200X400'// Replace with actual image URL
          alt="Sample Paper 1"
          borderRadius="md"
          boxShadow="lg"
        />
        <Image
          src='https://via.placeholder.com/200X400 '// Replace with actual image URL
          alt="Sample Paper 2"
          borderRadius="md"
          boxShadow="lg"
        />
        <Image
          src='https://via.placeholder.com/200X400' // Replace with actual image URL
          alt="Sample Paper 3"
          borderRadius="md"
          boxShadow="lg"
        />
        <Image
          src='https://via.placeholder.com/200X400' // Replace with actual image URL
          alt="Sample Paper 4"
          borderRadius="md"
          boxShadow="lg"
        />
      </SimpleGrid>

      {/* Explore Button */}
      <Button
        mt="6"
        colorScheme="yellow"
        size="lg"
        borderRadius="full"
        px="8"
      >
        Explore Now
      </Button>
    </Box>
  );
}

export default HeroBanner;
