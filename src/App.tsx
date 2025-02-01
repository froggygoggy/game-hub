import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
// Chakra v3 macht Anpassungen notwendig.

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //"0em", // 0px
        lg: `"nav nav" "aside main"`, //"62em", // ~992px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" hideBelow="lg">
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
