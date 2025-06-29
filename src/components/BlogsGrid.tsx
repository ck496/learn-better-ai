import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useBlogs from "../hooks/useBlogs";
import BlogCard from "./BlogCard";

const BlogsGrid = () => {
  const { data, error, isLoading } = useBlogs();
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10} marginTop={6}>
      {data.map((blog) => (
        <Link key={blog.id} to={`/blog/${blog.id}`}>
          <BlogCard blog={blog} type="blog-grid"></BlogCard>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default BlogsGrid;
