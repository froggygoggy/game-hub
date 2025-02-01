//Mit Chakra v3 geht das mit dem Loading besser. vgl. https://www.chakra-ui.com/docs/components/skeleton
// es sieht so aus, als muss man keine GameCardSkeleton machen

import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root
      width="300"
      variant="elevated"
      borderRadius="15px"
      overflow="hidden"
    >
      {/* <Skeleton height={xl: "200px", } width="600px" /> */}
      <Skeleton width="600px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
