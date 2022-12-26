import * as CSS from "csstype";
import BaseProps from "./base";

interface BaseFlexProps extends BaseProps {
  align?: CSS.Property.AlignItems;
  alignItems?: CSS.Property.AlignItems;
  justify?: CSS.Property.JustifyContent;
  justifyContent?: CSS.Property.JustifyContent;
  direction?: CSS.Property.FlexDirection;
  flexDirection?: CSS.Property.FlexDirection;
  wrap?: CSS.Property.FlexWrap;
  flexWrap?: CSS.Property.FlexWrap;
}

export default BaseFlexProps;
