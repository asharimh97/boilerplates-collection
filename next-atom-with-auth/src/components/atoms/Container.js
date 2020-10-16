import styled from "styled-components";
import Base from "./Base";

const flex = props => (props.flex ? { display: "flex" } : null);

const fluid = props => props.fluid && { maxWidth: "100%" };

const Container = styled(Base)`
  ${flex};
  ${fluid};
`;

Container.displayName = "Container";

Container.defaultProps = {
  mx: "auto",
  width: "100%",
  maxWidth: 640
};

export default Container;
