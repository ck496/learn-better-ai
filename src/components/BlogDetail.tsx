import { Box, Container, Text, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blogPost = blogs.find((b) => b.id === Number(id));
  if (!blogPost) return <Navigate to="/" replace />; // guard for bad IDs

  return (
    <Container>
      <VStack gap={6} align={"start"}>
        <Heading as="h1">{blogPost.title}</Heading>
        {/* Meta row: topic + rating */}
        <Text fontSize="sm" color="gray.500">
          {blogPost.topic} • Rating: {blogPost.rating}/10
        </Text>
        {/* Body copy */}
        <Text>{blogPost.body}</Text>
      </VStack>
    </Container>
  );
};

export default BlogDetail;
