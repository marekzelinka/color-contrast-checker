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
