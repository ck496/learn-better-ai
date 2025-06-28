import { List, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useBlogs from "../hooks/useBlogs";
import BlogCard from "./BlogCard";

const BottomBlogsGrid = () => {
  const { data, error, isLoading } = useBlogs();
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" gap={1}>
      {data.map((blog) => (
        <BlogCard blog={blog} type="blog-grid"></BlogCard>
      ))}
    </SimpleGrid>
  );
};

export default BottomBlogsGrid;
