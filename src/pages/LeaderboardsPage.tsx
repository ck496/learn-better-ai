import { VStack, Container, Heading, Text } from "@chakra-ui/react";
import TopPickGird from "../components/TopPickGird";

const LeaderboardsPage = () => {
  return (
    <Container>
      <VStack>
        <Heading as="h1">Leaderboards</Heading>
        <Text>Kudos to our top contributors and learners. </Text>
        <TopPickGird />
      </VStack>
    </Container>
  );
};

export default LeaderboardsPage;
