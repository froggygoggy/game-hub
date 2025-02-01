import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
// Chakra v3 macht Anpassungen notwendig.

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
      <GridItem area="main">
        {/* ... das ausgewählte Genre an das GameGrid übergeben wird */}
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
