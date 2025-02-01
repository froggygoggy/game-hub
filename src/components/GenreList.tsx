import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Image, List } from "@chakra-ui/react";
// import { Spinner } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
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
      <List.Root gap="2" variant="plain" align="center">
        {data.map((genre) => (
          <List.Item key={"genre" + genre.id}>
            <List.Indicator asChild>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
            </List.Indicator>
            {/* <Button
              key={"button" + genre.id}
              onClick={() => console.log(genre)}
              fontSize="lg"
              variant="ghost" */}
            {/* > */}
            {genre.name}
            {/* </Button> */}
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
