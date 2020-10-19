/* eslint-disable prefer-destructuring */
const createMediaQuery = n => `@media screen and (min-width:${n})`;

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

export const breakpoints = ["426px", "768px", "992px", "1200px"];

export const mediaQueries = breakpoints.map(createMediaQuery);

const aliases = ["sm", "md", "lg", "xl"];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);
export const font = "Google Sans, Helvetica, Arial, sans-serif";

// this font size scaling follows styled-system standard
// however we can't change the standard scaling, theme will always return
// this sequence `[12, 14, 16, 20, 24, 32, 48]` even if we try to shift
// some values between the scales.
export const fontSizes = [
  "0.8em",
  "1em",
  "1.25em",
  "1.563em",
  "1.953em",
  "2.441em",
  "3.052em"
];
fontSizes.midSmall = 18;
fontSizes.mid = 28;
fontSizes.midBig = 40;

export const light = 300;
export const regular = 400;
export const medium = 500;
export const semibold = 600;
export const bold = 700;
export const fontWeights = {
  light,
  regular,
  medium,
  semibold,
  bold
};

// in this new spacing standard index `0` stands for 0 margin/padding
export const space = [0, 4, 8, 16, 24, 32, 40, 64, 128, 256, 512];

export const shadows = [
  `0 1px 1px 0 rgba(10, 31, 68, 0.08), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 3px 4px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 8px 10px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 18px 18px 0 rgba(10, 31, 68, 0.12), 0 0 1px 0 rgba(10, 31, 68, 0.1)`,
  `0 26px 26px 0 rgba(10, 31, 68, 0.12), 0 0 1px 0 rgba(10, 31, 68, 0.1)`,
  `0 3px 32px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`
];
