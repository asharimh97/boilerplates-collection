import { config } from "configs/stitches.config";
import React from "react";
import { GeneralProps } from "./general";
import type { Spacing } from "./spacing";
import type * as Stitches from "@stitches/react";

interface BaseProps extends GeneralProps, Spacing {
  key?: string;
  as?: string;
  className?: string;
  style?: React.CSSProperties;
  css?: Stitches.CSS<typeof config>;
}

export default BaseProps;
