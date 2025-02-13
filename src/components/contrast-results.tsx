import { Stack, Text } from "@chakra-ui/react";

export function ContrastResult() {
  return (
    <Stack
      gap={8}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Text fontSize="4xl">Space Wonders</Text>
      <Text fontSize="lg" maxW="lg">
        I watched a documentary on space. It talked about black holes. The
        universe is so vast and mysterious. It blew my mind!
      </Text>
    </Stack>
  );
}
