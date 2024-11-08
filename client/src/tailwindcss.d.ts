// src/tailwindcss.d.ts
declare module 'tailwindcss/lib/util/flattenColorPalette' {
    const flattenColorPalette: (theme: Record<string, string | number>) => Record<string, string>;
    export default flattenColorPalette;
  }
  