import * as CSS from "csstype";

// Dimensions
const w = (value: CSS.Property.Width<string | number>) => ({
  width: value,
});

const h = (value: CSS.Property.Height<string | number>) => ({
  height: value,
});

// Displaying
const display = (value: CSS.Property.Display) => ({
  display: value,
});

const zIndex = (value: CSS.Property.ZIndex) => ({
  zIndex: value,
});

const float = (value: CSS.Property.Float) => ({
  float: value,
});

// Positioning
const position = (value: CSS.Property.Position) => ({
  position: value,
});

const top = (value: CSS.Property.Top<string | number>) => ({
  top: value,
});

const right = (value: CSS.Property.Right<string | number>) => ({
  right: value,
});

const bottom = (value: CSS.Property.Bottom<string | number>) => ({
  bottom: value,
});

const left = (value: CSS.Property.Left<string | number>) => ({
  left: value,
});

// Overflow
const overflow = (value: CSS.Property.Overflow) => ({
  overflow: value,
});

const size = (value: string | number) => ({
  width: value,
  height: value,
});

const layout = {
  width: w,
  w: w,
  height: h,
  h: h,
  display,
  zIndex,
  float,
  position,
  top,
  right,
  bottom,
  left,
  overflow,
  size,
};

export default layout;
