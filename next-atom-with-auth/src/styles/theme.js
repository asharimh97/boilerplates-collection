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
export const fontSizes = [12, 14, 16, 20, 24, 32, 48];
fontSizes.midSmall = 18;
fontSizes.mid = 28;
fontSizes.midBig = 40;

export const light = 300;
export const regular = 400;
export const medium = 500;
export const bold = 700;
export const fontWeights = {
  light,
  regular,
  medium,
  bold
};

// in this new spacing standard index `0` stands for 0 margin/padding
export const space = [0, 4, 8, 16, 24, 32, 40, 64, 128, 256, 512];
const shades = {
  black: {
    100: "#25282B",
    80: "#52575C",
    60: "#A0A4A8",
    40: "#CACCCF",
    20: "#EBEBEB",
    10: "#F5F5F5",
    5: "#FAFAFA",
    primary: "#25282B"
  },
  red: {
    80: "#99231D",
    60: "#cc2f26",
    50: "#ff3b30",
    40: "#ff8983",
    10: "#ffd8d6",
    primary: "#ff3b30"
  },
  green: {
    80: "#007a00",
    60: "#009b00",
    50: "#00b900",
    40: "#66d566",
    10: "#e5f8e5",
    primary: "#00b900"
  },
  orange: {
    80: "#c26307",
    60: "#e07b03",
    50: "#ff9500",
    40: "#ffc066",
    10: "#ffeacc",
    primary: "#ff9500"
  },
  blue: {
    80: "#02577e",
    60: "#039de3",
    50: "#1cb7fc",
    40: "#4fc7fd",
    10: "#e6f7ff",
    primary: "#1cb7fc"
  }
};

const textColor = {
  primary: shades.black[100],
  secondary: shades.black[80],
  tertiary: shades.black[60],
  quarternary: shades.black[40]
};

const inputColors = {
  success: shades.green,
  danger: shades.red,
  warning: shades.orange,
  disabled: shades.black,
  info: shades.blue
};

export const colors = {
  ...shades,
  ...inputColors,
  textColor,
  primary: shades.orange
};

export const radius = "3px";
export const shadows = [
  `0 1px 1px 0 rgba(10, 31, 68, 0.08), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 3px 4px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 8px 10px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 18px 18px 0 rgba(10, 31, 68, 0.12), 0 0 1px 0 rgba(10, 31, 68, 0.1)`,
  `0 26px 26px 0 rgba(10, 31, 68, 0.12), 0 0 1px 0 rgba(10, 31, 68, 0.1)`,
  `0 3px 32px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`
];

export const radii = ["3px", "5px"];
export const lineHeights = ["1", "1.5"];

export default {
  bold,
  breakpoints,
  colors,
  font,
  fontSizes,
  fontWeights,
  light,
  lineHeights,
  mediaQueries,
  medium,
  radii,
  radius,
  regular,
  shadows,
  space
};
