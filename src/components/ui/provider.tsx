import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import type { ReactNode } from "react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Bricolage Grotesque Variable" },
        body: { value: "Bricolage Grotesque Variable" },
      },
    },
  },
});

export function Provider({ children }: { children: ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
