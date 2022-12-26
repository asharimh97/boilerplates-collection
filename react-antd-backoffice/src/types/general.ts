import * as CSS from "csstype";
import { ColorPalette } from "./color";

interface LayoutProps {
  display?: CSS.Property.Display;
  zIndex?: CSS.Property.ZIndex;
  float?: CSS.Property.Float;
  position?: CSS.Property.Position;
  top?: CSS.Property.Top<string | number>;
  right?: CSS.Property.Right<string | number>;
  bottom?: CSS.Property.Bottom<string | number>;
  left?: CSS.Property.Left<string | number>;
  overflow?: CSS.Property.Overflow;
}

type BorderRadiusType =
  | "$rounded-sm"
  | "$rounded"
  | "$rounded-md"
  | "$rounded-lg"
  | "$rounded-xl"
  | "$rounded-2xl"
  | "$rounded-3xl"
  | "$rounded-4xl"
  | "$rounded-full"
  | CSS.Property.BorderRadius<string | number>;

interface BorderProps {
  border?: CSS.Property.Border<string | number>;
  borderTop?: CSS.Property.BorderTop<string | number>;
  borderRight?: CSS.Property.BorderRight<string | number>;
  borderBottom?: CSS.Property.BorderBottom<string | number>;
  borderLeft?: CSS.Property.BorderLeft<string | number>;
  borderColor?: ColorPalette | CSS.Property.BorderColor;
  borderRadius?: BorderRadiusType;
  br?: BorderRadiusType;

  boxShadow?:
    | "$shadow-xs"
    | "$shadow-sm"
    | "$shadow-md"
    | "$shadow-lg"
    | "$shadow-xl"
    | "$shadow-2xl"
    | "$shadow-inner"
    | "$shadow-outline"
    | "$shadow-focus"
    | CSS.Property.BoxShadow;
}

export interface GeneralProps extends LayoutProps, BorderProps {
  width?: CSS.Property.Width<number | string>;
  w?: CSS.Property.Width<number | string>;
  height?: CSS.Property.Height<number | string>;
  h?: CSS.Property.Height<number | string>;
  color?: ColorPalette;
}
