import * as CSS from "csstype";

const align = (value: CSS.Property.AlignItems) => ({
  alignItems: value,
});

const justify = (value: CSS.Property.JustifyContent) => ({
  justifyContent: value,
});

const direction = (value: CSS.Property.FlexDirection) => ({
  flexDirection: value,
});

const wrap = (value: CSS.Property.FlexWrap) => ({
  flexWrap: value,
});

const flex = {
  align,
  justify,
  direction,
  wrap,
};

export default flex;
