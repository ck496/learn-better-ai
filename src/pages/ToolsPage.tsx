import { Container, VStack, Text, Heading } from "@chakra-ui/react";

import React from "react";

const ToolsPage = () => {
  return (
    <Container>
      <VStack>
        <Heading as="h1">Tools</Heading>
        <Text>
          Checkout some of our amazing learning tools like the Pomodoro Clock
          and Rubber Duck that help you learn and retain information better.
        </Text>
      </VStack>
    </Container>
  );
};

export default ToolsPage;
