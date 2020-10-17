import { Button as AntButton } from "antd";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { flexbox, layout, space, typography } from "styled-system";
import propTypes from "@styled-system/prop-types";

const flex = props => props.flex && { display: "flex" };

const color = props => {
  if (props.color) {
    if (props.type === "link" || props.type === "text") {
      return css`
        &,
        &:hover,
        &:active,
        &:focus {
          color: ${props.theme.colors[props.color]?.["primary"] || props.color};
        }
      `;
    }

    return css`
      background-color: ${props.theme.colors[props.color]?.["primary"] ||
      props.color};
      border-color: ${props.theme.colors[props.color]?.["primary"] ||
      props.color};
      color: white;

      &:hover,
      &:active,
      &:focus {
        background-color: ${props.theme.colors[props.color]?.["60"] ||
        props.color};
        border-color: ${props.theme.colors[props.color]?.["60"] || props.color};
        color: white;
      }
    `;
  }

  return null;
};

const Button = styled(AntButton)`
  ${color};

  ${flex};
  ${flexbox};
  ${layout};
  ${space};
  ${typography}
`;

Button.propTypes = {
  flex: PropTypes.bool,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.typography
};

Button.displayName = "Button";

export default Button;
