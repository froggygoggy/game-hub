import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App.tsx";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";
import { ThemeProvider } from "next-themes";
import { system } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      {/* <ChakraProvider value={system2}> */}
      {/* <ChakraProvider value={defaultSystem}> */}
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>
);
