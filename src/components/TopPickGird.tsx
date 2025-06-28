import {
  SimpleGrid,
  Heading,
  Icon,
  HStack,
  Card,
  List,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTrophy } from "react-icons/fa";

import useBlogs, { Blog } from "../hooks/useBlogs";
import BlogCard from "./BlogCard";
const TopPickGird = () => {
  const { data, error, isLoading } = useBlogs();

  const topPicks = data.sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <Box marginLeft={2} h="100%">
      <HStack justify="center" gap={2} marginBottom={2}>
        <Icon as={FaTrophy} boxSize="20px" color="#f0bc00" />
        <Heading>Top Picks</Heading>
      </HStack>

      <SimpleGrid height="400px" overflowY="auto">
        <List.Root>
          {topPicks.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <BlogCard blog={blog} type="side-grid"></BlogCard>
            </Link>
          ))}
        </List.Root>
      </SimpleGrid>
    </Box>
  );
};

export default TopPickGird;
