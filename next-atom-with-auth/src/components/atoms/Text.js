import styled, { css } from "styled-components";
import { color, layout, space, typography } from "styled-system";
import propTypes from "@styled-system/prop-types";
import themeGet from "@styled-system/theme-get";

const bold = css`
  font-weight: ${props => props.bold && props.theme.bold};
`;

const semibold = css`
  font-weight: ${props => props.semibold && props.theme.semibold};
`;

const medium = css`
  font-weight: ${props => props.medium && props.theme.medium};
`;

const caps = css`
  text-transform: ${props => props.caps && "capitalize"};
`;

const uppercase = css`
  text-transform: ${props => props.uppercase && "uppercase"};
`;

const lowercase = css`
  text-transform: ${props => props.lowercase && "lowercase"};
`;

const truncate = props =>
  props.truncate &&
  css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;
  `;

const small = css`
  font-size: ${props => props.small && props.theme.fontSizes[0]};
`;

const tight = props =>
  props.tight &&
  css`
    margin-top: 0;
    margin-bottom: 0;
  `;

const Text = styled.p`
  color: ${themeGet("colors.textColor.primary")};
  ${color}
  ${layout}
  ${space}
  ${typography}

  ${small};

  ${bold};
  ${semibold};
  ${medium};

  ${caps};
  ${uppercase};
  ${lowercase};

  ${truncate};
  ${tight};
`;

Text.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.layout
};

Text.displayName = "Text";

Text.defaultProps = {
  fontSize: 1,
  lineHeight: "1.65",
  mx: 0,
  my: 0,
  mb: "1.05em"
};

export default Text;
