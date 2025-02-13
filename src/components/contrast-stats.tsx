import { Rating } from "@/components/ui/rating";
import { getContrastRatio } from "@/lib/color-contrast";
import {
  getContrastGrade,
  getOverallStarCount,
  getStarCount,
} from "@/lib/utils";
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
  const contrastGrade = getContrastGrade(contrastRatio);

  const smallTextStarCount = getStarCount({
    size: "small",
    ratio: contrastRatio,
  });
  const largeTextStarCount = getStarCount({
    size: "large",
    ratio: contrastRatio,
  });

  const overallStarCount = getOverallStarCount({
    contrastGrade,
    smallTextStarCount,
    largeTextStarCount,
  });

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
              {contrastGrade}
            </Text>
            <Rating readOnly value={overallStarCount} size="sm" />
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
          <Rating readOnly value={smallTextStarCount} count={3} size="sm" />
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
          <Rating readOnly value={largeTextStarCount} count={3} size="sm" />
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
}
