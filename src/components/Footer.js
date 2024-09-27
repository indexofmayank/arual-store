import React from "react";
import { Box, SimpleGrid, Stack, Link, Text, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaTelegram, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <Box bg="gray.50" py={10}>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} maxW="7xl" mx="auto" px={6}>
        {/* Logo and Description */}
        <Stack spacing={4}>
          <Image
            src="https://via.placeholder.com/150" // Replace with actual logo
            alt="Physics Wallah"
            boxSize="50px"
          />
          <Text fontSize="lg" fontWeight="bold">
            Aurla for Austim
          </Text>
          <Text fontSize="sm">
          Autism spectrum disorder (ASD) is a neurological and developmental condition that affects a person's communication, behavior, interaction with others, and learning. Some key facts about ASD include: 
          </Text>
          <HStack spacing={4}>
            <Image src="https://via.placeholder.com/150x50" alt="Google Play" />
            <Image src="https://via.placeholder.com/150x50" alt="App Store" />
          </HStack>
        </Stack>

        {/* Know Us Links */}
        <Stack spacing={2} align="flex-start">
          <Text fontSize="lg" fontWeight="bold">Know us</Text>
          <Link href="#">Blog</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Shipping Policy</Link>
          <Link href="#">Terms and Conditions</Link>
        </Stack>

        {/* Help Us Links */}
        <Stack spacing={2} align="flex-start">
          <Text fontSize="lg" fontWeight="bold">Help us</Text>
          <Link href="#">Contact Us</Link>
          <Link href="#">About Us</Link>
        </Stack>

        {/* Our Channels Links */}
        <Stack spacing={2} align="flex-start">
          <Text fontSize="lg" fontWeight="bold">Our Channels</Text>
          <Link href="#"> Austim - Foundation</Link>
          <Link href="#">Autim - New</Link>
          <Link href="#">Austim - Old</Link>
          <Link href="#">Austim - Neuralink</Link>
          <Link href="#">Austim - Ausota</Link>
          <Link href="#">All Channels</Link>
        </Stack>
      </SimpleGrid>

      {/* Social Media Icons */}
      <HStack justifyContent="center" mt={8} spacing={4}>
        <Text>Follow Us :</Text>
        <IconButton
          as="a"
          href="#"
          icon={<FaTelegram />}
          aria-label="Telegram"
          variant="ghost"
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaFacebook />}
          aria-label="Facebook"
          variant="ghost"
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaInstagram />}
          aria-label="Instagram"
          variant="ghost"
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaLinkedin />}
          aria-label="LinkedIn"
          variant="ghost"
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaTwitter />}
          aria-label="Twitter"
          variant="ghost"
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaYoutube />}
          aria-label="YouTube"
          variant="ghost"
        />
      </HStack>

      {/* Back to top */}
      <Text textAlign="center" mt={4} fontSize="sm" color="gray.500">
        <Link href="#">Back to Top</Link>
      </Text>
    </Box>
  );
}

export default Footer;
