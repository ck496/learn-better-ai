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

import { useColorModeValue } from "./ui/color-mode";

export function HeroSection() {
  const bg = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");

  return (
    <Box as="section" bg={bg} py={{ base: 12, md: 24 }} height="400px">
      <Container maxW="container.lg">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 8, md: 16 }}
        >
          {/* Text Column */}
          <Box flex="1">
            <Heading as="h1" size="2xl" color={textColor} mb={4}>
              AI-Powered Tech Guides
            </Heading>
            <Text fontSize="lg" color={textColor} mb={6}>
              Instantly convert your Markdown notes into engaging, expert-level
              blog posts—tailored to any reader’s expertise.
            </Text>
            <HStack justify="center" gap={5}>
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
}
