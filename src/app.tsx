import {
  Card,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ColorSelectForm } from "./components/color-select-form";
import { ContrastResult } from "./components/contrast-results";
import { ContrastStats } from "./components/contrast-stats";
import type { Colors } from "./types";

export function App() {
  const [colors, setColors] = useState<Colors>({
    foreground: "#ffffff",
    background: "#4B88EE",
  });

  return (
    <Flex
      as="main"
      minH="svh"
      bg="bg.subtle"
      direction="column"
      alignItems="center"
      justifyContent="center"
      py="12"
    >
      <Stack w="full" gap={10}>
        <Container as="header" maxW="md" centerContent>
          <Heading size="4xl">Color Contrast Checker</Heading>
          <Text fontSize="sm" color="fg.muted">
            Caculate the contrast ratio of text and background colors.
          </Text>
        </Container>
        <Container
          as="main"
          maxW={{ base: "3xl", lg: "5xl" }}
          p={{ base: 0, md: 6, lg: 8 }}
        >
          <Card.Root
            direction="column"
            rounded={{ base: 0, md: 13 }}
            overflow="hidden"
          >
            <SimpleGrid columns={{ base: 1, lg: 2 }}>
              <Card.Body>
                <Stack gap={8}>
                  <ColorSelectForm colors={colors} onSubmit={setColors} />
                  <Stack gap={2}>
                    <Text
                      fontSize="sm"
                      lineHeight="shorter"
                      fontWeight="medium"
                    >
                      Contrast
                    </Text>
                    <ContrastStats colors={colors} />
                  </Stack>
                </Stack>
              </Card.Body>
              <Flex
                py={14}
                px={7}
                h="full"
                alignItems="center"
                justifyContent="center"
                color="white"
                bg="blue.500"
              >
                <ContrastResult />
              </Flex>
            </SimpleGrid>
          </Card.Root>
        </Container>
      </Stack>
    </Flex>
  );
}
