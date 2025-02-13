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

export function getStarCount({
  size,
  ratio,
}: {
  size: "small" | "large";
  ratio: number;
}) {
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
