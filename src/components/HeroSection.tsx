// components/HeroSection.tsx
import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";
import bannerImg from "../assets/banner/grainBanner.webp";

const HeroSection = () => {
  // const bg = useColorModeValue("gray.300", "gray.800");
  return (
    <Box
      as="section"
      minH={{ base: "auto", md: "70vh" }}
      py={{ base: 12, md: 24 }}
      h="100%"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${bannerImg})`}
      backgroundColor="blackAlpha.200"
      backgroundBlendMode="overlay"
    >
      <Container maxW="container.lg">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="flex-start" // align items to the top of the row
          justify="flex-start" // push everything to the left
          gap={{ base: 8, md: 16 }}
          padding={4}
        >
          {/* Text Column */}
          <Box
            textAlign="left"
            width="70%"
            flex="0 0 40%" // never grow, never shrink, always 30% wide
            minW="0" // allow it to shrink below its content’s min-width
          >
            <Heading as="h1" size="5xl" color="gray.100" mb={4}>
              Learn-Better.AI
            </Heading>
            <Text fontSize="2xl" color="gray.100" mb={2}>
              Escape tutorial hell and build faster
            </Text>
            <Text fontSize="lg" color="gray.100" mb={6}>
              Transform years of scattered notes into precise, adaptive, and
              searchable tech guides—foster community knowledge sharing and
              slash onboarding time by 70%
            </Text>

            <HStack justify="left" gap={5} p={4}>
              <Button colorScheme="blue" size="lg" borderRadius={50}>
                Get Started
              </Button>
              <Button variant="surface" size="lg" borderRadius={50}>
                Learn More
              </Button>
            </HStack>
          </Box>

          {/* Image Column */}
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
