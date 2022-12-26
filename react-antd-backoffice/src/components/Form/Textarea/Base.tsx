import { Input } from "antd";
import { Flex, Text } from "components/Base";
import { styled } from "configs/stitches.config";
import useId from "hooks/useId";
import { TextareaProps } from "./types";
import { baseStyle, statusVariants } from "../constants";

const Component = styled(
  Input.TextArea,
  {
    "&.ant-input": {
      ...baseStyle,
      height: "auto",
    },
    "&.ant-input-textarea": {
      width: "100%",

      "& .ant-input": {
        ...baseStyle,
        height: "auto",
      },
    },
  },
  {
    variants: {
      status: {
        ...statusVariants,
      },
    },
  },
);

const BaseTextarea = ({
  css: cssProp = {},
  label,
  helper,
  errorMessage,
  required,
  ...props
}: TextareaProps) => {
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
    "&.ant-input": {
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
      {/* @ts-ignore */}
      <Component id={id} {...props} css={componentStyle} />
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

BaseTextarea.defaultProps = {
  rows: 3,
};

export default BaseTextarea;
