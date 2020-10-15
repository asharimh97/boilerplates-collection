import styled from "styled-components";
import Base from "./Base";

const Flex = styled(Base)`
  display: flex;
`;

Flex.defaultProps = {
  alignItems: "center"
};

export default Flex;
