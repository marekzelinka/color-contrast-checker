import type { Colors } from "@/types";

export function getContrastRatio(
  foreground: Colors["foreground"],
  background: Colors["background"],
) {
  const fgLum = getLuminance(foreground);
  const bgLum = getLuminance(background);
  const brightestColor = Math.max(fgLum, bgLum);
  const darkestColor = Math.min(fgLum, bgLum);
  return (brightestColor + 0.05) / (darkestColor + 0.05);
}

function getLuminance(hex: string): number {
  const rgb = parseInt(hex.slice(1), 16);
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
