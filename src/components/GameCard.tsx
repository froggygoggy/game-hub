import { Game, Platform } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
  selectedPlatform: Platform | null;
}

const GameCard = ({ game, selectedPlatform }: Props) => {
  return (
    <Card.Root
      size="md"
      variant="elevated"
      borderRadius="15px"
      overflow="hidden"
    >
      {/* kleine Bilder: */}
      <Image src={getCroppedImageUrl(game.background_image)} />
      {/* große Bilder: */}
      {/* <Image src={game.background_image} /> */}
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformiconList
            id={game.id}
            platforms={game.parent_platforms.map((p) => p.platform)}
            selectedPlatform={selectedPlatform}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
