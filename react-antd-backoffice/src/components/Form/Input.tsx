import { Input as AntInput, InputProps as AntInputProps } from "antd";
import { Flex, Text } from "components/Base";
import { styled } from "configs/stitches.config";
import useId from "hooks/useId";
import BaseProps from "types/base";
import { baseStyle, statusVariants } from "./constants";

export const InputComponent = styled(
  AntInput,
  {
    "&.ant-input": {
      ...baseStyle,

      "& .ant-input-suffix, & .ant-input-prefix": {
        fontWeight: 500,
      },
    },
  },
  // Status variants
  {
    variants: {
      status: {
        ...statusVariants,
      },
    },
  },
  // Group Variants
  {
    "& .ant-input-group": {
      boxShadow: baseStyle.boxShadow,

      "& .ant-input": {
        height: "36px",
      },
    },
    "& .ant-input-group-addon:first-child, & .ant-input:first-child": {
      borderTopLeftRadius: "$rounded",
      borderBottomLeftRadius: "$rounded",
    },
    "& .ant-input-group-addon:last-child, & .ant-input:last-child": {
      borderTopRightRadius: "$rounded",
      borderBottomRightRadius: "$rounded",
    },
  },
  // Input with icons
  {
    "&.ant-input-affix-wrapper": {
      borderRadius: "$rounded",
      height: "36px",

      "& .ant-input": {
        borderRadius: "inherit",
      },
    },
  },
);

// @ts-ignore
export interface InputProps
  extends Omit<AntInputProps, "height" | "width">,
    Omit<BaseProps, "color"> {
  status?: "error" | "warning" | "success" | "info";
  label?: string;
  helper?: string;
  errorMessage?: string;
  required?: boolean;
  [key: string]: any;
}

const Input = ({
  css: cssProp = {},
  label,
  helper,
  errorMessage,
  required,
  ...props
}: InputProps) => {
  const {
    key,
    as,
    children,
    style,
    prefix,
    suffix,
    onChange,
    onPressEnter,
    ...rest
  } = props;

  const id = useId("input");
  const hasMessage = !!(errorMessage || helper);

  const componentStyle = {
    "&.ant-input, &.ant-input-affix-wrapper, &.ant-input-group-wrapper": {
      ...cssProp,
      ...rest,
      mb: hasMessage ? "8px" : "12px",
    },
  };

  return (
    <Flex direction="column" w="100%">
      {label && (
        <Text as="label" htmlFor={id} size="$sm" color="$coolGray700" mb="8px">
          {label}
          {required && (
            <Text as="span" color="$red500" ml="4px">
              *
            </Text>
          )}
        </Text>
      )}

      <InputComponent id={id} {...props} css={componentStyle} />
      {helper && !errorMessage && (
        <Text size="$sm" color="$coolGray500" mb="8px">
          {helper}
        </Text>
      )}
      {errorMessage && (
        <Text size="$sm" color="$red500" mb="8px">
          {errorMessage}
        </Text>
      )}
    </Flex>
  );
};

export default Input;
