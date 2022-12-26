import * as CSS from "csstype";
import BaseProps from "./base";

interface BaseTextProps extends BaseProps {
  align?: CSS.Property.TextAlign;
  weight?: CSS.Property.FontWeight;
  size?: CSS.Property.FontSize;
  height?: CSS.Property.LineHeight<number | string>;
  spacing?: CSS.Property.LetterSpacing<number | string>;
  family?: CSS.Property.FontFamily;
  italic?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  caps?: boolean;
  ellipsis?: boolean;
}

export default BaseTextProps;
