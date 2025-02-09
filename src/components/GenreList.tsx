import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Box, Button, Heading, Image, List } from "@chakra-ui/react";
// import { Spinner } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

// Die übergeordnete Komponente App.tsx soll informiert werden, dass sich
// ein ausgewähltes Genre geändert hat
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons: number[] = [...Array(20).keys()];
  //   console.log(skeletons);

  if (error) return null;

  //   if (isLoading) return <Spinner />;
  if (isLoading)
    return skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />);

  return (
    // variant = "plain" heißt, keine Listenpunkte
    <>
      {/* {skeletons.map(() => (
        <GenreSkeleton />
      ))} */}
      <Heading marginBottom={3}>Genres</Heading>
      <List.Root gap="2" variant="plain" align="center">
        {data.map((genre) => (
          <List.Item key={"genre" + genre.id}>
            <List.Indicator asChild>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
            </List.Indicator>
            {/* Box is necessary to keep the Button within the given space */}
            <Box>
              <Button
                whiteSpace="normal"
                textAlign="left"
                key={"button" + genre.id}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                variant="ghost"
              >
                {genre.name}
              </Button>
            </Box>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
