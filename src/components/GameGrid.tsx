import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "@/App";
// import GameCardContainer from "./GameCardContainer";

// Das ausgewählte Genre wird an useGames Hook übergeben
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        gap={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            // <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
            // </GameCardContainer>
          ))}
        {/* {skeletons.map((skeleton) => (
          <GameCardSkeleton key={skeleton} />
        ))} */}
        {data.map((game) => (
          // <GameCardContainer>
          <GameCard
            key={game.id}
            game={game}
            selectedPlatform={gameQuery.platform}
          ></GameCard>
          // </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
