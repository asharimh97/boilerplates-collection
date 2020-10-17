import styled, { css } from "styled-components";
import theme from "styles/theme";
import Text from "./Text";

const titleStyles = {
  h1: { fontSize: theme.fontSizes[6] },
  h2: { fontSize: theme.fontSizes[5] },
  h3: { fontSize: theme.fontSizes[4] },
  h4: { fontSize: theme.fontSizes[3] },
  h5: { fontSize: theme.fontSizes[2] }
};

const Title = styled(Text)`
  ${props =>
    props.as &&
    css`
      ${titleStyles[props.as]};
    `}
`;

Title.displayName = "Title";

Title.defaultProps = {
  as: "h1",
  lineHeight: "1.15",
  mb: "1.05em",
  mt: "2em"
};

export default Title;
