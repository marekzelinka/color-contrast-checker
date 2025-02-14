import type { Colors } from "@/types";
import { parseColor } from "@chakra-ui/react";

/**
 * Calculate the contrast ratio by dividing the luminance of the brighter color
 * by the luminance of the darker color.
 *
 * @param foreground {string} - Foreground colorin hex format
 * @param background {string} - Foreground colorin hex format
 *
 * @returns {number} The ratio of the luminance of the brightest shade to that
 * of the darkest shade.
 *
 * @see https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color
 */
export function getContrastRatio(
  foreground: Colors["foreground"],
  background: Colors["background"],
): number {
  const fgLum = getLuminance(foreground);
  const bgLum = getLuminance(background);
  const brightestShade = Math.max(fgLum, bgLum);
  const darkestShade = Math.min(fgLum, bgLum);

  return (brightestShade + 0.05) / (darkestShade + 0.05);
}

/**
 * Calculates the luminance of a given color value.
 *
 * @param colorString - The color value as a string (e.g., "rgba(255, 0, 0,
 * 1)", "#FFFFFF").
 *
 * @returns The luminance of the color as a number between 0 and 1.
 *
 * @see https://stackoverflow-com.translate.goog/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color?_x_tr_sl=en&_x_tr_tl=sv&_x_tr_hl=sv&_x_tr_pto=sc
 */
function getLuminance(colorString: string): number {
  const rgb = coerseToRgb(colorString);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const sRGB = [r, g, b].map((value) => {
    value /= 255;

    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
}

function coerseToRgb(colorString: string): number {
  const color = parseColor(colorString);
  const hex = color.toString("hex");
  const rgb = parseInt(hex.slice(1), 16);

  return rgb;
}
