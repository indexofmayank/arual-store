import React from "react";
import {
    HeroSearchBanner,
    HeroBanner,
    VideoCourseCards,
    Footer,
    Blogpost,
    TestimonialCard,
} from '../components';
import { Box, VStack, Heading, Stack, SimpleGrid, Text} from "@chakra-ui/react";

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

const blogs = [
    {
        title: "Understanding React Context API",
        imageSrc: "https://via.placeholder.com/600x400",
        description: "A deep dive into the Context API in React and how to use it effectively.",
        link: "#",
    },
    {
        title: "Chakra UI: The Modern React UI Library",
        imageSrc: "https://via.placeholder.com/600x400",
        description: "Learn how to create beautiful and responsive UIs with Chakra UI.",
        link: "#",
    },
    {
        title: "Building a Fullstack App with MERN",
        imageSrc: "https://via.placeholder.com/600x400",
        description: "Step by step guide to building a fullstack app using MongoDB, Express, React, and Node.",
        link: "#",
    },
];



function Homepage() {

    return (
        <>
            <VStack spacing="8" w="full" p="4">
                <HeroSearchBanner />
                <HeroBanner />
                <VideoCourseCards />
                {/* <Blogpost /> */}
                <Box maxW="7xl" mx="auto" px={6} py={12}>
                    <Heading as="h1" size="2xl" mb={8} textAlign="center">
                        Blog Page
                    </Heading>
                    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
                        {blogs.map((blog, index) => (
                            <Blogpost
                                key={index}
                                title={blog.title}
                                imageSrc={blog.imageSrc}
                                description={blog.description}
                                link={blog.link}
                            />
                        ))}
                    <Text>Read all blogs.....</Text>
                    </SimpleGrid>
                </Box>



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
                    <Text>Read all testimonials.....</Text>
                
            </VStack>
            <Footer />

        </>
    );
}

export default Homepage;