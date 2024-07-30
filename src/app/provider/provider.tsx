// File path: /path/to/your/providers/Providers.tsx
"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/customTheme";

export function Providers({ children }: { children: React.ReactNode }) {
  const themeExtended = theme();
  return (
    <ChakraProvider theme={themeExtended}>
      <ColorModeScript
        initialColorMode={themeExtended.config.initialColorMode}
      />
      {children}
    </ChakraProvider>
  );
}
