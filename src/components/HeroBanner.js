import React from "react";
import { Box, Text, Button, SimpleGrid, Image, VStack } from "@chakra-ui/react";

function HeroBanner() {
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
        EXAMS APPROACHING?
      </Text>
      <Text fontSize="xl">
        Stay Ahead With the Latest Class 10<sup>th</sup> Sample Papers!
      </Text>

      {/* Images Grid */}
      <SimpleGrid columns={[2, 2, 4]} spacing="4" my="6">
        <Image
          src="https://via.placeholder.com/150" // Replace with actual image URL
          alt="Sample Paper 1"
          borderRadius="md"
          boxShadow="lg"
        />
        <Image
          src="https://via.placeholder.com/150" // Replace with actual image URL
          alt="Sample Paper 2"
          borderRadius="md"
          boxShadow="lg"
        />
        <Image
          src="https://via.placeholder.com/150" // Replace with actual image URL
          alt="Sample Paper 3"
          borderRadius="md"
          boxShadow="lg"
        />
        <Image
          src="https://via.placeholder.com/150" // Replace with actual image URL
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
