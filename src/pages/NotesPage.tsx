import { Container, VStack, Text, Heading } from "@chakra-ui/react";

const NotesPage = () => {
  return (
    <Container>
      <VStack>
        <Heading as="h1">Notes Page</Heading>
        <Text>You can add your notes here</Text>
      </VStack>
    </Container>
  );
};

export default NotesPage;
