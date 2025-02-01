import { HStack, Stack } from "@chakra-ui/react";
import { SkeletonCircle, SkeletonText } from "./ui/skeleton";

const GenreSkeleton = () => {
  return (
    <HStack paddingY={1}>
      <SkeletonCircle size="8" />
      <Stack flex="1">
        <SkeletonText noOfLines={1} height="3" />
      </Stack>
    </HStack>
  );
};

export default GenreSkeleton;
