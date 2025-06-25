import {
  SimpleGrid,
  Heading,
  Icon,
  HStack,
  Card,
  List,
  Box,
} from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";

import useBlogs from "../hooks/useBlogs";
import BlogCard from "./BlogCard";

const TopPickGird = () => {
  const { data, error, isLoading } = useBlogs();
  return (
    <Box>
      <HStack justify="center" gap={2} marginTop={1} marginBottom={2}>
        <Icon as={FaTrophy} boxSize="20px" color="#f0bc00" />
        <Heading>Top Picks</Heading>
      </HStack>

      <SimpleGrid height="360px" overflowY="auto">
        <List.Root>
          {data.map((blog) => (
            <BlogCard blog={blog} variant="side-grid"></BlogCard>
          ))}
        </List.Root>
      </SimpleGrid>
    </Box>
  );
};

export default TopPickGird;
