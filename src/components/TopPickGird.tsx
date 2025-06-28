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
  return (
    <Box marginLeft={2}>
      <HStack justify="center" gap={2} marginBottom={2}>
        <Icon as={FaTrophy} boxSize="20px" color="#f0bc00" />
        <Heading>Top Picks</Heading>
      </HStack>

      <SimpleGrid height="360px" overflowY="auto">
        <List.Root>
          {data.map((blog) => (
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
