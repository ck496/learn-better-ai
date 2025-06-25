import React from "react";
import { Blog } from "../hooks/useBlogs";
import { Card, CardBody, HStack, Image, Text, Heading } from "@chakra-ui/react";
import logo from "../assets/mainIcon.webp";

interface Props {
  blog: Blog;
  variant: string | null;
}
const BlogCard = ({ blog, variant }: Props) => {
  return (
    <Card.Root size="sm" marginX={2} marginY={1}>
      {variant === "blog-grid" ? <Image src={logo} /> : null}
      <Card.Body>
        <HStack justifyContent="space-between">
          <Text fontSize="sm" color="#9764e7">
            {blog.topic}
          </Text>
        </HStack>
        <Heading fontSize="md" textAlign="left">
          {blog.title}
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default BlogCard;
