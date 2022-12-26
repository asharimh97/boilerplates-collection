import { Flex } from "components/Base";
import { styled } from "configs/stitches.config";
import useId from "hooks/useId";
import AntPicker from "./DatePicker";
import { DatepickerProps } from "./types";
import { pickerStatusVariants } from "../constants";
import { renderLabel, renderError, renderHelper } from "../utils";

const Picker = styled(
  AntPicker,
  {
    "&.ant-picker": {
      width: "100%",
      borderColor: "$coolGray300",
      borderRadius: "$rounded",
      borderWidth: "1px",
      boxShadow: "$shadow-sm",
      height: "36px",
    },
  },
  {
    variants: {
      status: {
        ...pickerStatusVariants,
      },
    },
  },
);

function Basepicker({
  css = {},
  label,
  required,
  errorMessage,
  helper,
  ...props
}: DatepickerProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = props.id || useId("picker");
  const hasMessage = !!(errorMessage || helper);

  const componentStyle = {
    ...css,
    mb: hasMessage ? "8px" : "12px",
  };

  return (
    <Flex direction="column" w="100%">
      {renderLabel(id, label, required)}
      <Flex w="100%" css={componentStyle}>
        <Picker {...props} />
      </Flex>
      {renderHelper(helper, errorMessage)}
      {renderError(errorMessage)}
    </Flex>
  );
}

export default Basepicker;
