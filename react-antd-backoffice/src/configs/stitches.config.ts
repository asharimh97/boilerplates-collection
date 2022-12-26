import { createStitches } from "@stitches/react";
import { borders, radii, shadows } from "./stitches-config/border";
import colors, { backgrounds } from "./stitches-config/colors";
import flex from "./stitches-config/flex";
import grid from "./stitches-config/grid";
import layout from "./stitches-config/layout";
import spacing from "./stitches-config/spacing";
import { fonts, fontSizes, fontWeights } from "./stitches-config/typography";

export const { styled, css, globalCss, config, theme } = createStitches({
  theme: {
    colors: colors,
    fonts: fonts,
    fontWeights: fontWeights,
    fontSizes: fontSizes,
    radii: radii,
    shadows: shadows,
  },
  prefix: "reach-backoffice",
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
  },
  utils: {
    ...spacing,
    ...borders,
    ...backgrounds,
    ...layout,
    ...flex,
    ...grid,
  },
});
