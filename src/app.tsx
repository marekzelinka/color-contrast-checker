import {
  Card,
  Container,
  Flex,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field } from "./components/ui/field";
import { Rating } from "./components/ui/rating";

export function App() {
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
                  <SimpleGrid columns={2} gap={6}>
                    <GridItem>
                      <Field label="Text color">
                        <Input />
                      </Field>
                    </GridItem>
                    <GridItem>
                      <Field label="Background color">
                        <Input />
                      </Field>
                    </GridItem>
                  </SimpleGrid>
                  <Stack gap={2}>
                    <Text
                      fontSize="sm"
                      lineHeight="shorter"
                      fontWeight="medium"
                    >
                      Contrast
                    </Text>
                    <SimpleGrid columns={2} gap={2}>
                      <GridItem colSpan={2}>
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                          bg="bg.muted"
                          px={5}
                          py={6}
                          rounded="lg"
                          roundedBottom={0}
                        >
                          <Text fontSize="5xl" fontWeight="bold">
                            3.47
                          </Text>
                          <Stack alignItems="center" gap={0}>
                            <Text fontSize="sm" fontWeight="medium">
                              Good
                            </Text>
                            <Rating readOnly defaultValue={3} size="sm" />
                          </Stack>
                        </Flex>
                      </GridItem>
                      <GridItem>
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                          bg="bg.muted"
                          p={5}
                          rounded="md"
                          roundedTop={0}
                        >
                          <Text fontSize="sm" fontWeight="medium">
                            Small text
                          </Text>
                          <Rating
                            readOnly
                            defaultValue={1}
                            count={3}
                            size="sm"
                          />
                        </Flex>
                      </GridItem>
                      <GridItem>
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                          bg="bg.muted"
                          p={5}
                          rounded="md"
                          roundedTop={0}
                        >
                          <Text fontSize="sm" fontWeight="medium">
                            Large text
                          </Text>
                          <Rating
                            readOnly
                            defaultValue={3}
                            count={3}
                            size="sm"
                          />
                        </Flex>
                      </GridItem>
                    </SimpleGrid>
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
                <Stack
                  gap={8}
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Text fontSize="4xl">Space Wonders</Text>
                  <Text fontSize="lg" maxW="lg">
                    I watched a documentary on space. It talked about black
                    holes. The universe is so vast and mysterious. It blew my
                    mind!
                  </Text>
                </Stack>
              </Flex>
            </SimpleGrid>
          </Card.Root>
        </Container>
      </Stack>
    </Flex>
  );
}
