import React from "react";
import { Box, Image, Text, Stack, Heading, useColorModeValue } from "@chakra-ui/react";

const TestimonialCard = ({ author, role, avatar, children }) => (
    <Box
        borderWidth="1px"
        borderRadius="lg"
        p={5}
        boxShadow="lg"
        bg={useColorModeValue('white', 'gray.800')}
    >
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="center">
            <Image
                borderRadius="full"
                boxSize="80px"
                src={avatar}
                alt={`Avatar of ${author}`}
            />
            <Stack direction="column" spacing={0} fontSize="sm">
                <Text fontWeight="600">{author}</Text>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>{role}</Text>
            </Stack>
        </Stack>
        <Text mt={5}>{children}</Text>
    </Box>
);

export default TestimonialCard