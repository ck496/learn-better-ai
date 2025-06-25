import blogs from "../data/blogs";
export interface Blog {
  id: number;
  title: string;
  topic: string;
  rating: number;
  body: string;
}

const useBlogs = () => ({
  data: blogs,
  error: null,
  isLoading: false,
});

export default useBlogs;
