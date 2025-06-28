import {
  Box,
  Container,
  Text,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import blogs from "../data/blogs";
import BlogLikes from "./BlogLikes";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id === Number(id));
  if (!blog) return <Navigate to="/" replace />; // guard for bad IDs

  return (
    <Container>
      <VStack gap={6} align={"start"}>
        <Heading as="h1">{blog.title}</Heading>
        {/* Meta row: topic + rating */}
        <HStack justifyContent="space-between" gap={5}>
          <Text fontSize="xs" color="#4b189b">
            {blog.topic}
          </Text>
          <BlogLikes rating={blog.rating} />
        </HStack>
        {/* Body copy */}
        <Text>{blog.body}</Text>
      </VStack>
    </Container>
  );
};

export default BlogDetail;
