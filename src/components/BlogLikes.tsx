import { HStack, Badge, Icon, Text } from "@chakra-ui/react";
import { ThumbsUp } from "lucide-react";

interface Props {
  rating: number;
}
const BlogLikes = ({ rating }: Props) => {
  return (
    <HStack gap="1">
      <Text fontSize="xs">{rating}</Text>
      <Icon size="xs">
        <ThumbsUp />
      </Icon>
    </HStack>
  );
};

export default BlogLikes;
