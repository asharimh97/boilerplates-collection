import * as CSS from "csstype";

type MarginProp = CSS.Property.Margin<number | string>;
type PaddingProp = CSS.Property.Padding<number | string>;

export interface Spacing {
  margin?: MarginProp;
  m?: MarginProp;
  marginX?: MarginProp;
  mx?: MarginProp;
  marginY?: MarginProp;
  my?: MarginProp;
  marginLeft?: MarginProp;
  ml?: MarginProp;
  marginRight?: MarginProp;
  mr?: MarginProp;
  marginTop?: MarginProp;
  mt?: MarginProp;
  marginBottom?: MarginProp;
  mb?: MarginProp;

  padding?: PaddingProp;
  p?: PaddingProp;
  paddingX?: PaddingProp;
  px?: PaddingProp;
  paddingY?: PaddingProp;
  py?: PaddingProp;
  paddingLeft?: PaddingProp;
  pl?: PaddingProp;
  paddingRight?: PaddingProp;
  pr?: PaddingProp;
  paddingTop?: PaddingProp;
  pt?: PaddingProp;
  paddingBottom?: PaddingProp;
  pb?: PaddingProp;
}
