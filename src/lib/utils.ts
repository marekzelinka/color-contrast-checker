import type { ContrastGrade, ContrastRating, TestSize } from "@/types";
import type { JsxStyleProps } from "@chakra-ui/react";

export function getContrastGrade(ratio: number): ContrastGrade {
  if (ratio >= 7) {
    return "Super";
  }
  if (ratio >= 4.5) {
    return "Very Good";
  }
  if (ratio >= 3) {
    return "Good";
  }
  if (ratio >= 2) {
    return "Poor";
  }

  return "Very Poor";
}

export function getOverallStarCount({
  contrastGrade,
  smallTextStarCount,
  largeTextStarCount,
}: {
  contrastGrade: ContrastGrade;
  smallTextStarCount: number;
  largeTextStarCount: number;
}): number {
  if (largeTextStarCount === 3 && smallTextStarCount === 3) {
    return 5;
  }

  switch (contrastGrade) {
    case "Super":
      return 5;
    case "Very Good":
      return 4;
    case "Good":
      return 3;
    case "Poor":
      return 2;
    case "Very Poor":
      return 1;
    default:
      return 0;
  }
}

export function getStarCount({
  size,
  contrastRatio,
}: {
  size: TestSize;
  contrastRatio: number;
}) {
  switch (size) {
    case "small": {
      if (contrastRatio >= 7) {
        return 3;
      }
      if (contrastRatio >= 4.5) {
        return 2;
      }

      return 1;
    }
    case "large": {
      if (contrastRatio >= 3) {
        return 3;
      }

      return 1;
    }
  }
}

const STAT_COLOR_SHADES: {
  [key in ContrastRating]: Pick<
    JsxStyleProps,
    "colorPalette" | "backgroundColor" | "color"
  >;
} = {
  "poor-contrast": {
    colorPalette: "red",
    backgroundColor: "red.200/90",
    color: "red.800",
  },
  "good-contrast": {
    colorPalette: "yellow",
    backgroundColor: "yellow.100/90",
    color: "yellow.800",
  },
  "very-good-contrast": {
    colorPalette: "green",
    backgroundColor: "green.200/90",
    color: "green.800",
  },
};

export function getRatioColorShades(contrastGrade: ContrastGrade) {
  if (contrastGrade === "Poor" || contrastGrade === "Very Poor") {
    return STAT_COLOR_SHADES["poor-contrast"];
  } else if (contrastGrade === "Good") {
    return STAT_COLOR_SHADES["good-contrast"];
  } else if (contrastGrade === "Very Good" || contrastGrade === "Super") {
    return STAT_COLOR_SHADES["very-good-contrast"];
  }
}

export function getTextStatColorShades(starCount: number) {
  if (starCount === 3) {
    return STAT_COLOR_SHADES["very-good-contrast"];
  } else if (starCount === 2) {
    return STAT_COLOR_SHADES["good-contrast"];
  } else if (starCount === 1) {
    return STAT_COLOR_SHADES["poor-contrast"];
  }

  return "";
}
