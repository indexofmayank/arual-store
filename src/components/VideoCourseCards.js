import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Badge,
  HStack,
  Tag,
  Button,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';


function VideoCourseCards() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/course/table/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const {data} = await response.json();
        setCourses(data); // Assuming the API returns an array of courses
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  console.log(courses);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text color="red.500">Error: {error}</Text>;
  }

  return (
    <Box maxW="7xl" mx="auto" px={4} >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Popular Austim Video Courses
      </Text>

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {courses.map((course, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ boxShadow: "lg" }}
            p="4"
            // onClick={() => navigate('/videocoursedetailpage')}}
            onClick={() => {navigate.push('/videocoursedetailpage')}}
          >
            {/* Tag */}
            {course.language && (
              <Tag
                position="absolute"
                top={2}
                left={2}
                colorScheme={
                  course.tag === "Hindi"
                    ? "green"
                    : course.tag === "English"
                    ? "purple"
                    : "yellow"
                }
                borderRadius="full"
                px={2}
              >
                {course.language}
              </Tag>
            )}

            {/* Course Image */}
            <Image
              src='http://via.placeholder.com/100X50'
              alt={course.title}
              boxSize="150px"
              objectFit="cover"
              mx="auto"
            />

            {/* Course Details */}
            <Box mt="3">
              <Text fontWeight="bold">{course.title}</Text>
              <Text fontSize="sm" color="gray.500">
                {course.instructor_name}
              </Text>

              {/* Price and Discount */}
              <HStack justifyContent="space-between" mt={2}>
                <Text fontWeight="bold">₹{course.price}</Text>
                <Text as="s" color="gray.500">
                  ₹{course.category}
                </Text>
                <Text as="s" color="gray.500">
                  ₹{course.target_audienc}
                </Text>

                <Badge colorScheme="green">{course.language}</Badge>
              </HStack>

              {/* Rating */}
              <HStack mt={2} alignItems="center">
                <StarIcon color="yellow.400" />
                <Text>{4}</Text>
              </HStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Button for more courses */}
      <Button colorScheme="blue" mt="6">
        See All
      </Button>
    </Box>
  );
}

export default VideoCourseCards;
