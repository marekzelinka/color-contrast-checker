import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  LocaleProvider,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Outfit Variable" },
        body: { value: "Outfit Variable" },
      },
    },
  },
});

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <LocaleProvider locale="en-GB">{children}</LocaleProvider>
    </ChakraProvider>
  );
}
