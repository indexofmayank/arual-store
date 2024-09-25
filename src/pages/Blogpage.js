import React from "react";
import { Box, SimpleGrid, Image, Text, Stack, Heading, Link } from "@chakra-ui/react";
import {Blogpost} from '../components';

const BlogPage = () => {
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

    return (
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
            </SimpleGrid>
        </Box>
    );
};


export default BlogPage;