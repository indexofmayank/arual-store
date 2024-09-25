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
  
  function VideoCourseCards() {
    const courses = [
      {
        title: "Yakeen for NEET Droppers",
        edition: "2024 Edition",
        price: 3440,
        discount: "20% OFF",
        originalPrice: 4299,
        rating: 4.8,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual URL
        tag: "Trending",
      },
      {
        title: "Arjuna for NEET Class 11th",
        edition: "2024 Edition",
        price: 2036,
        discount: "30% OFF",
        originalPrice: 2899,
        rating: 4.8,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual URL
        tag: "Bestselling",
      },
      {
        title: "Lakshya for NEET Class 12th",
        edition: "2024 Edition",
        price: 2175,
        discount: "25% OFF",
        originalPrice: 2899,
        rating: 4.9,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual URL
        tag: "Bestselling",
      },
      {
        title: "Objective NCERT Punch",
        edition: "2024 Edition",
        price: 1953,
        discount: "15% OFF",
        originalPrice: 2297,
        rating: 4.9,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual URL
        tag: "Teacher's Pick",
      },
    ];
  
    return (
      <Box maxW="7xl" mx="auto" px={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Popular NEET Video Courses
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
            >
              {/* Tag */}
              {course.tag && (
                <Tag
                  position="absolute"
                  top={2}
                  left={2}
                  colorScheme={
                    course.tag === "Trending"
                      ? "green"
                      : course.tag === "Bestselling"
                      ? "purple"
                      : "yellow"
                  }
                  borderRadius="full"
                  px={2}
                >
                  {course.tag}
                </Tag>
              )}
  
              {/* Course Image */}
              <Image
                src={course.imageUrl}
                alt={course.title}
                boxSize="150px"
                objectFit="cover"
                mx="auto"
              />
  
              {/* Course Details */}
              <Box mt="3">
                <Text fontWeight="bold">{course.title}</Text>
                <Text fontSize="sm" color="gray.500">
                  {course.edition}
                </Text>
  
                {/* Price and Discount */}
                <HStack justifyContent="space-between" mt={2}>
                  <Text fontWeight="bold">₹{course.price}</Text>
                  <Text as="s" color="gray.500">
                    ₹{course.originalPrice}
                  </Text>
                  <Badge colorScheme="green">{course.discount}</Badge>
                </HStack>
  
                {/* Rating */}
                <HStack mt={2} alignItems="center">
                  <StarIcon color="yellow.400" />
                  <Text>{course.rating}</Text>
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
  