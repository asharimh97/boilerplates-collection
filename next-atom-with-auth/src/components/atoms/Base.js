import styled from "styled-components";
import {
  compose,
  layout,
  position,
  space,
  color,
  flexbox,
  grid,
  background,
  border,
  shadow,
  typography
} from "styled-system";
import propTypes from "@styled-system/prop-types";

import theme from "styles/theme";

const Base = styled("div")(
  compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

Base.displayName = "Base";
Base.defaultProps = {
  theme
};

Base.propTypes = {
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography
};

export default Base;
