import type { Colors } from "@/types";
import { Stack, Text } from "@chakra-ui/react";

export function ContrastResult({ colors }: { colors: Colors }) {
  return (
    <Stack
      gap={8}
      py={14}
      px={7}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      backgroundColor={colors.background}
    >
      <Text fontSize="4xl" color={colors.foreground}>
        Space Wonders
      </Text>
      <Text fontSize="lg" maxW="lg" color={colors.foreground}>
        I watched a documentary on space. It talked about black holes. The
        universe is so vast and mysterious. It blew my mind!
      </Text>
    </Stack>
  );
}
