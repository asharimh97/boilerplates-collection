import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";
import { styled } from "configs/stitches.config";
import useId from "hooks/useId";
import BaseProps from "types/base";
import { selectStatusVariants } from "./constants";
import { BaseInputProps, InputStatus } from "./types";
import { renderLabel, renderHelper, renderError } from "./utils";
import { Flex } from "../Base";

const Component = styled(
  AntSelect,
  {
    "&.ant-select": {
      w: "100%",

      "& .ant-select-selector": {
        borderColor: "$coolGray300",
        borderRadius: "$rounded",
        borderWidth: "1px",
        boxShadow: "$shadow-sm",
        height: "36px",

        "span.ant-select-selection-search": {
          height: "34px",

          "& input": {
            height: "34px",
          },
        },
        "span.ant-select-selection-item": {
          textAlign: "left",
          lineHeight: "32px",
        },
      },
    },
  },
  {
    variants: {
      status: {
        ...selectStatusVariants,
      },
    },
  },
);

type CSSType = Pick<BaseProps, "css">;

interface SelectProps extends Omit<AntSelectProps, "status">, BaseInputProps {
  css?: CSSType;
  content?: string;
  status?: InputStatus;
}

function Select({
  css = {},
  label,
  content,
  required,
  helper,
  errorMessage,
  ...props
}: SelectProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = props.id || useId("checkbox");
  const hasMessage = !!(errorMessage || helper);

  const componentStyle = {
    ...css,
    mb: hasMessage ? "8px" : "12px",
  };

  return (
    <Flex direction="column" w="100%">
      {renderLabel(id, label, required)}
      <Flex css={componentStyle} w="100%">
        {/* @ts-ignore */}
        <Component {...props} id={id} />
      </Flex>
      {renderHelper(helper, errorMessage)}
      {renderError(errorMessage)}
    </Flex>
  );
}

export default Select;
