// die verwendung hiervon führt zu Warnungen, die ich nicht lösen kann.
// das tutorial löst das problem nicht.
// außerdem soll diese karte das Problem lösen, dass die Skeletons
// genauso aussehen wie die karten. das klappt aber auch nicht.
import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Card.Root variant="elevated" borderRadius="15px" overflow="hidden">
      {children}
    </Card.Root>
  );
};

export default GameCardContainer;
