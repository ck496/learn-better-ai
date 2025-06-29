import {
  Box,
  Container,
  Text,
  Heading,
  VStack,
  HStack,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import blogs from "../data/blogs";
import BlogLikes from "../components/BlogLikes";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id === Number(id));
  if (!blog) return <Navigate to="/" replace />; // guard for bad IDs

  return (
    <Box marginTop={4} px={4} py={2}>
      <VStack gap={6}>
        <Center>
          <Heading fontSize="3xl" textAlign="center">
            {blog.title}
          </Heading>
        </Center>

        {/* Meta row: topic + rating */}
        <HStack justifyContent="space-between" gap={5}>
          <Text fontSize="xs" color="#4b189b">
            {blog.topic}
          </Text>
          <BlogLikes rating={blog.rating} />
        </HStack>
        {/* Body copy */}
        <Text textAlign="left">{blog.body}</Text>
      </VStack>
    </Box>
  );
};

export default BlogDetail;
