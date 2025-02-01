import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Image, List, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();

  return (
    // variant = "plain" heißt, keine Listenpunkte
    <List.Root gap="2" variant="plain" align="center">
      {data.map((genre) => (
        <List.Item key={genre.id}>
          <List.Indicator asChild>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
          </List.Indicator>
          <Text fontSize="lg">{genre.name}</Text>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
