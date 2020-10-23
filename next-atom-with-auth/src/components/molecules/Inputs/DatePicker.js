import { DatePicker as Picker } from "antd";
import styled from "styled-components";
import { border, layout, space } from "styled-system";
import propTypes from "@styled-system/prop-types";

const DatePicker = styled(Picker)`
  ${border}
  ${layout}
  ${space}
`;

DatePicker.defaultProps = {
  onFocus: e => e.preventDefault(),
  onBlur: e => e.preventDefault()
};

DatePicker.propTypes = {
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.space
};

export default DatePicker;
