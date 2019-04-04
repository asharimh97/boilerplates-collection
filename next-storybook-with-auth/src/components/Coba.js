import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { space } from "styled-system";

const Wrapper = styled.div`
  color: ${theme.black};
  display: block;
  ${space}
`;

const Coba = props => <Wrapper {...props}>Ini komponen coba</Wrapper>;

export default Coba;
