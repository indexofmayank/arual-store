import React from "react";
import {
    HeroSearchBanner,
    HeroBanner,
    VideoCourseCards,
    Footer,
    Blogpost,
    TestimonialCard
} from '../components';
import { Box, VStack } from "@chakra-ui/react";


function Homepage() {

    return (
        <>
            <VStack spacing="8" w="full" p="4">
                <HeroSearchBanner />
                <HeroBanner />
                <VideoCourseCards />
                <Blogpost />
                <TestimonialCard />
            </VStack>
            <Footer />

        </>
    );
}

export default Homepage;