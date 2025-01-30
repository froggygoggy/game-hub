import { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";
import PlatformiconList from "./PlatformiconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root variant="outline" borderRadius="15px" overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformiconList
          id={game.id}
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
