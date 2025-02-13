import { Rating } from "@/components/ui/rating";
import { getContrastRatio } from "@/lib/utils";
import type { Colors } from "@/types";
import {
  Flex,
  FormatNumber,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export function ContrastStats({ colors }: { colors: Colors }) {
  const contrastRatio = getContrastRatio(colors.foreground, colors.background);

  return (
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
            <FormatNumber
              value={contrastRatio}
              style="decimal"
              maximumFractionDigits={2}
              minimumFractionDigits={2}
            />
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
          <Rating readOnly defaultValue={1} count={3} size="sm" />
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
          <Rating readOnly defaultValue={3} count={3} size="sm" />
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
}
