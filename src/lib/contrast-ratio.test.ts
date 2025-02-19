import { describe, expect, test } from "vitest";
import { getContrastRatio } from "./contrast-ratio";

describe("getContrastRatio", () => {
  test("calculates correctly", () => {
    const foreground = "#FFFFFF";
    const background = "#4B88EE";
    const contrastRatio = getContrastRatio(foreground, background);

    expect(contrastRatio).toBe(3.4679536630941294);
  });
});
