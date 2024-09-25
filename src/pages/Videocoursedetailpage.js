// VideoCourseDetails.js
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';

const VideoCourseDetails = () => {
  const course = {
    title: "Mastering React",
    instructor: "John Doe",
    description: "Learn React from scratch with hands-on projects.",
    imageUrl: "https://via.placeholder.com/400",
    duration: "10 hours",
    lessons: [
      "Introduction to React",
      "State Management",
      "Routing with React Router",
      "Building a Complete Application",
      "Deployment",
    ],
  };

  return (
    <Container maxW="container.lg" py={10}>
      <Box borderWidth={1} borderRadius="lg" overflow="hidden">
        <Image src={course.imageUrl} alt={course.title} />
        <VStack spacing={4} p={6}>
          <Heading as="h2" size="xl" textAlign="center">
            {course.title}
          </Heading>
          <Text fontSize="lg" fontWeight="bold" color="gray.500">
            Instructor: {course.instructor}
          </Text>
          <Text fontSize="md">{course.description}</Text>
          <Text fontSize="sm" color="gray.500">
            Duration: {course.duration}
          </Text>
          <Button colorScheme="teal" size="lg">
            Enroll Now
          </Button>
        </VStack>
      </Box>

      <Box mt={10}>
        <Heading as="h3" size="lg" mb={4}>
          Course Lessons
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {course.lessons.map((lesson, index) => (
            <Box
              key={index}
              borderWidth={1}
              borderRadius="md"
              p={4}
              shadow="md"
            >
              <Text>{lesson}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default VideoCourseDetails;
