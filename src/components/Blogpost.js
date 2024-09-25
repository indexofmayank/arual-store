import React from "react";
import { Box, SimpleGrid, Image, Text, Stack, Heading, Link } from "@chakra-ui/react";

function Blogpost() {

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
            <Image src='https://via.placeholder.com/150' alt='test' borderRadius="md" />
            <Stack spacing={4} mt={4}>
                <Heading fontSize="xl">titile</Heading>
                <Text fontSize="md" color="gray.600">
                    description
                </Text>
                <Link href='#' color="teal.500" fontWeight="bold" isExternal>
                    Read More
                </Link>
            </Stack>
        </Box>
    )
}

export default Blogpost;