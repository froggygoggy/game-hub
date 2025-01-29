import { Grid, GridItem } from "@chakra-ui/react";
// Chakra v3 macht Anpassungen notwendig.

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //"0em", // 0px
        lg: `"nav nav" "aside main"`, //"62em", // ~992px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem area="aside" bg="gold" hideBelow="lg">
        Aside
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
