import LinkItems from "../data/sidebarItems";

const useBlogs = () => ({
  sidebarItems: LinkItems,
  error: null,
  isLoading: false,
});

export default useBlogs;
