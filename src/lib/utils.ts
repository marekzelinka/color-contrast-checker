import type { ContrastRating, Size } from "@/types";
import type { JsxStyleProps } from "@chakra-ui/react";

/**
 * Corrects the input color by adding a hash (#) if missing
 *
 * @param color {string} - Color in hex format
 *
 * @returns {string} Formatted color code with a leading hash (#)
 */
export function formatColorCode(color: string): string {
  return color.startsWith("#") ? color.slice(0, 7) : "#" + color.slice(0, 6);
}

// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }

// export function rgbToHex(r, g, b) {
//   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }

export function getContrastGrade(ratio: number): string {
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
  contrastGrade: string;
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

export function getStarCount({ size, ratio }: { size: Size; ratio: number }) {
  switch (size) {
    case "small": {
      if (ratio >= 7) {
        return 3;
      }
      if (ratio >= 4.5) {
        return 2;
      }

      return 1;
    }
    case "large": {
      if (ratio >= 3) {
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
    backgroundColor: "red.200/70",
    color: "red.700",
  },
  "good-contrast": {
    colorPalette: "yellow",
    backgroundColor: "yellow.200/70",
    color: "yellow.700",
  },
  "very-good-contrast": {
    colorPalette: "green",
    backgroundColor: "green.200/70",
    color: "green.700",
  },
};

export function getRatioColorShades(contrastGrade: string) {
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
