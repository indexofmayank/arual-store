import React from "react";
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

function HeroSearchBanner() {

    return (
        <InputGroup size="lg">
            <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FiSearch} color="gray.400" />}
            />
            <Input
                type="text"
                placeholder="Search Products"
                borderRadius="md"
                focusBorderColor="teal.500"
                boxShadow="sm"
            />
        </InputGroup>
    );

}

export default HeroSearchBanner;