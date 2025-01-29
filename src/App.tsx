import { Button } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

function App() {
  return (
    <>
      <Button variant="surface">Click Me</Button>
      <ColorModeButton />
    </>
  );
  // return <button type="button">Click Me!</button>;
}

export default App;
