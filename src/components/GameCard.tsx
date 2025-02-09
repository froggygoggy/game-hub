import { Game, Platform } from "@/hooks/useGames";
import { Card, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

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
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformiconList
            id={game.id}
            platforms={game.parent_platforms.map((p) => p.platform)}
            selectedPlatform={selectedPlatform}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Flex justifyContent="space-between" verticalAlign="top">
          <Heading paddingTop={2} fontSize="xl">
            {game.name}
          </Heading>
          <Emoji rating={game.rating_top} />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
