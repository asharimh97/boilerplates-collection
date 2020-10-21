import { Input } from "antd";
import styled from "styled-components";
import { border, layout, space } from "styled-system";
import propTypes from "@styled-system/prop-types";

const InputText = styled(Input)`
  ${border}
  ${layout}
  ${space}
`;

InputText.propTypes = {
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.space
};

export default InputText;
