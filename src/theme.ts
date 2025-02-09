// HowTo: https://chakra-ui.com/docs/theming/customization/overview
// Terminal after Changes: npx @chakra-ui/cli typegen src/theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        // used: https://smart-swatch.netlify.app/#121212
        // maybe better: https://themera.vercel.app/
        // auch gut: https://www.palx.design/
        gray: {
          50: { value: "#f9f9f9" },
          100: { value: "#ededed" },
          200: { value: "#d3d3d3" },
          300: { value: "#b3b3b3" },
          400: { value: "#a0a0a0" },
          500: { value: "#898989" },
          //   500: { value: "#de3b71" }, // Test themechanges: gray.500 will be pink.
          600: { value: "#6c6c6c" },
          700: { value: "#202020" },
          800: { value: "#121212" },
          900: { value: "#111" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
