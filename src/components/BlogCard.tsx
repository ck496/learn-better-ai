import React from "react";
import { Blog } from "../hooks/useBlogs";
import { Card, CardBody, HStack, Image, Text, Heading } from "@chakra-ui/react";
import logo from "../assets/mainIcon.webp";
import BlogLikes from "./BlogLikes";

interface Props {
  blog: Blog;
  type: string | null;
}
const BlogCard = ({ blog, type }: Props) => {
  return (
    <Card.Root
      size="sm"
      marginX={2}
      marginY={1}
      variant={type === "blog-grid" ? "elevated" : "subtle"}
    >
      {/* {type === "blog-grid" ? <Image src={logo} /> : null} */}
      <Card.Body>
        <HStack justifyContent="space-between">
          <Text fontSize="xs" color="#4b189b">
            {blog.topic}
          </Text>
          <BlogLikes rating={blog.rating} />
        </HStack>
        <Heading fontSize="md" textAlign="left">
          {blog.title}
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default BlogCard;
