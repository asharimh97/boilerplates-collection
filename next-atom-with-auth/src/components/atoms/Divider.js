import styled, { css } from "styled-components";
import { borderColor, space } from "styled-system";
import Box from "./Box";

const Divider = styled(Box)`
  border: none;
  border-top: solid 1px;
  color: transparent;
  display: block;
  width: 100%;

  ${props =>
    props.vertical &&
    css`
      display: inline-block;
      border-top: none;
      border-left: solid 1px;
      font-size: inherit;
      margin: 0 12px;
      min-height: 0.9em;
      width: 1px;

      ${space};
    `}

  ${borderColor}
`;

Divider.defaultProps = {
  borderColor: "#ccc"
};

Divider.displayName = "Divider";

export default Divider;
