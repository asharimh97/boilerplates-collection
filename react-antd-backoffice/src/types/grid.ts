import * as CSS from "csstype";
import BaseProps from "./base";

interface BaseGridProps extends BaseProps {
  align?: CSS.Property.AlignItems;
  justify?: CSS.Property.JustifyContent;
  direction?: CSS.Property.FlexDirection;
  wrap?: CSS.Property.FlexWrap;
  gap?: CSS.Property.Gap<number | string>;
  columns?: CSS.Property.GridTemplateColumns;
  rows?: CSS.Property.GridTemplateRows;
}

export default BaseGridProps;
