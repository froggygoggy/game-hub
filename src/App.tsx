import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
// Chakra v3 macht Anpassungen notwendig.

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //"0em", // 0px
        lg: `"nav nav" "aside main"`, //"62em", // ~992px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX={5}>
        {/* Hier kommt die Info an, dass sich ein ausgewähltes Genre geändert hat 
        Dadurch wird ein Rerender ausgelöst, wobei ... [unten geht's weiter]*/}
        <GenreList
          onSelectGenre={(genre) => {
            setGameQuery({ ...gameQuery, genre });
          }}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>
      <GridItem area="main">
        <HStack gap={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
