import { Select as ANTSelect } from "antd";
import styled from "styled-components";
import { border, layout, space } from "styled-system";
import propTypes from "@styled-system/prop-types";

const Select = styled(ANTSelect)`
  ${border}
  ${layout}
  ${space}
`;

Select.propTypes = {
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.space
};

export default Select;
