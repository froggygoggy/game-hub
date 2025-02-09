// HowTo: https://chakra-ui.com/docs/theming/customization/overview
// Terminal after Changes: npx @chakra-ui/cli typegen src/theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        // https://smart-swatch.netlify.app/#121212
        gray: {
          50: { value: "#edf3f7" },
          100: { value: "#cfd9e2" },
          200: { value: "#aec0cf" },
          300: { value: "#8da8bf" },
          400: { value: "#6d8fae" },
          500: { value: "#547694" },
          //   500: { value: "#de3b71" }, // Test themechanges: gray.500 will be pink.
          600: { value: "#425b73" },
          700: { value: "#304152" },
          800: { value: "#1d2831" },
          900: { value: "#080d12" },
        },
      },
    },
  },
});

export const system2 = createSystem(defaultConfig, customConfig);
