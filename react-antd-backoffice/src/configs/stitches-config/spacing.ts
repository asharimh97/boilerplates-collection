// @ts-nocheck

const margin = (value) => ({
  margin: value,
});

const marginY = (value) => ({
  marginTop: value,
  marginBottom: value,
});

const marginX = (value) => ({
  marginLeft: value,
  marginRight: value,
});

const marginLeft = (value) => ({
  marginLeft: value,
});

const marginRight = (value) => ({
  marginRight: value,
});

const marginTop = (value) => ({
  marginTop: value,
});

const marginBottom = (value) => ({
  marginBottom: value,
});

const padding = (value) => ({
  padding: value,
});

const paddingY = (value) => ({
  paddingTop: value,
  paddingBottom: value,
});

const paddingX = (value) => ({
  paddingLeft: value,
  paddingRight: value,
});

const paddingLeft = (value) => ({
  paddingLeft: value,
});

const paddingRight = (value) => ({
  paddingRight: value,
});

const paddingTop = (value) => ({
  paddingTop: value,
});

const paddingBottom = (value) => ({
  paddingBottom: value,
});

const spacing = {
  m: margin,
  mx: marginX,
  marginX,
  my: marginY,
  marginY,
  ml: marginLeft,
  mr: marginRight,
  mt: marginTop,
  mb: marginBottom,

  p: padding,
  px: paddingX,
  paddingX,
  py: paddingY,
  paddingY,
  pl: paddingLeft,
  pr: paddingRight,
  pt: paddingTop,
  pb: paddingBottom,
};

export default spacing;
