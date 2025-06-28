import { VStack, Container, Heading, Text } from "@chakra-ui/react";

const LeaderboardsPage = () => {
  return (
    <Container>
      <VStack>
        <Heading as="h1">Leaderboards</Heading>
        <Text>Kudos to our top contributors and learners. </Text>
      </VStack>
    </Container>
  );
};

export default LeaderboardsPage;
