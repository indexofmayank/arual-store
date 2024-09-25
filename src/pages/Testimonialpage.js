import React from "react";
import { Box, Image, Text, Stack, Heading, useColorModeValue } from "@chakra-ui/react";
import {TestimonialCard} from '../components';
const TestimonialPage = () => {
  const testimonials = [
    {
      author: "Jane Doe",
      role: "CEO of Imaginary Co.",
      avatar: "https://via.placeholder.com/150",
      content: "Absolutely love the quality of service provided. Highly recommend to anyone looking for top-notch professionalism!",
    },
    {
      author: "John Smith",
      role: "Freelancer",
      avatar: "https://via.placeholder.com/150",
      content: "This product saved me hours of work. Couldn't be happier with the results!",
    },
  ];

  return (
    <Box maxW="5xl" mx="auto" p={5}>
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
        What Our Clients Say
      </Heading>
      <Stack spacing={8}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial}>
            {testimonial.content}
          </TestimonialCard>
        ))}
      </Stack>
    </Box>
  );
};

export default TestimonialPage;
