import { Rating } from "@/components/ui/rating";
import { getContrastRatio } from "@/lib/color-contrast";
import {
  getContrastGrade,
  getRatioColorShades,
  getOverallStarCount as getRatioStarCount,
  getStarCount,
  getTextStatColorShades,
} from "@/lib/utils";
import type { Colors, Size } from "@/types";
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

  const smallTextStarCount = getStarCount({
    size: "small",
    contrastRatio,
  });
  const largeTextStarCount = getStarCount({
    size: "large",
    contrastRatio,
  });

  return (
    <SimpleGrid columns={2} gap={2}>
      <GridItem colSpan={2}>
        <ContrastGradeStat
          contrastRatio={contrastRatio}
          smallTextStarCount={smallTextStarCount}
          largeTextStarCount={largeTextStarCount}
        />
      </GridItem>
      <GridItem>
        <TextGradeStat size="small" starCount={smallTextStarCount} />
      </GridItem>
      <GridItem>
        <TextGradeStat size="large" starCount={largeTextStarCount} />
      </GridItem>
    </SimpleGrid>
  );
}

function ContrastGradeStat({
  contrastRatio,
  smallTextStarCount,
  largeTextStarCount,
}: {
  contrastRatio: number;
  smallTextStarCount: number;
  largeTextStarCount: number;
}) {
  const contrastGrade = getContrastGrade(contrastRatio);
  const ratioColorShades = getRatioColorShades(contrastGrade);

  const ratioStarCount = getRatioStarCount({
    contrastGrade,
    smallTextStarCount,
    largeTextStarCount,
  });

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="bg.muted"
      px={5}
      py={6}
      rounded="lg"
      roundedBottom={0}
      {...ratioColorShades}
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
        <Text fontSize="sm" fontWeight="semibold">
          {contrastGrade}
        </Text>
        <Rating readOnly value={ratioStarCount} />
      </Stack>
    </Flex>
  );
}

function TextGradeStat({ size, starCount }: { size: Size; starCount: number }) {
  const shades = getTextStatColorShades(starCount);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="bg.muted"
      p={5}
      rounded="lg"
      roundedTop={0}
      {...shades}
    >
      <Text fontSize="sm" fontWeight="semibold">
        {size === "small" ? "Small text" : "Large text"}
      </Text>
      <Rating readOnly value={starCount} count={3} size="sm" />
    </Flex>
  );
}
