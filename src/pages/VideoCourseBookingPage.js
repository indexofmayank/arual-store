import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Flex,
  Input,
  Textarea,
  Grid,
  GridItem,
} from "@chakra-ui/react";

// Mock data for course details
const courseData = {
  title: "Learn React from Scratch",
  description: "This course covers all the basics of React.js to help you become a proficient front-end developer.",
  image: "https://via.placeholder.com/600x400", // Sample image
  videoPreviewUrl: "https://via.placeholder.com/600x400", // Replace with actual video URL or embed
  price: "$99",
  curriculum: [
    { title: "Introduction to React", duration: "20 minutes" },
    { title: "React Components", duration: "30 minutes" },
    { title: "State and Props", duration: "25 minutes" },
    { title: "React Hooks", duration: "35 minutes" },
    { title: "Routing with React Router", duration: "40 minutes" },
  ]
};

// Course Preview Component
const CoursePreview = () => (
  <Box>
    <Image src={courseData.image} alt="Course Preview" w="100%" h="auto" />
  </Box>
);

// Course Curriculum Component
const CourseCurriculum = () => (
  <Box mt={8}>
    <Heading as="h3" size="lg" mb={4}>
      Course Curriculum
    </Heading>
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {courseData.curriculum.map((item, index) => (
        <GridItem key={index}>
          <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h4" size="md">{item.title}</Heading>
            <Text mt={2}>Duration: {item.duration}</Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  </Box>
);

// Booking Form Component
const BookingForm = () => (
  <Box p={6} borderWidth="1px" borderRadius="md" shadow="md">
    <Heading as="h3" size="lg" mb={4}>
      Book this Course
    </Heading>
    <Stack spacing={4}>
      <Input placeholder="Full Name" />
      <Input type="email" placeholder="Email Address" />
      <Input placeholder="Phone Number" />
      <Textarea placeholder="Any message (optional)" />
      <Button colorScheme="blue" size="lg">Book Now - {courseData.price}</Button>
    </Stack>
  </Box>
);

const VideoCourseBookingPage = () => (
  <Box maxW="7xl" mx="auto" px={6} py={12}>
    <Heading as="h1" size="2xl" mb={4}>
      {courseData.title}
    </Heading>
    <Text fontSize="lg" color="gray.600" mb={8}>
      {courseData.description}
    </Text>

    {/* Course Preview Section */}
    <Flex direction={{ base: "column", md: "row" }} gap={8}>
      <CoursePreview />
      <BookingForm />
    </Flex>

    {/* Curriculum Section */}
    <CourseCurriculum />
  </Box>
);

export default VideoCourseBookingPage;
