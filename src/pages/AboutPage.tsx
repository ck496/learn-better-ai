import { Container, VStack, Text, Heading } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Container>
      <VStack>
        <Heading as="h1">About Page</Heading>
        <Text>
          An AI learning platform that lets you instantly convert your Markdown
          notes into engaging, expert-level blog posts—tailored to any reader’s
          expertise.
        </Text>
      </VStack>
    </Container>
  );
};

export default AboutPage;
