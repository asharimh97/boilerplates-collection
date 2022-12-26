import { Input as AntInput } from "antd";
import { styled } from "configs/stitches.config";
import { baseStyle, statusVariants } from "./constants";
import { InputProps } from "./Input";
import useId from "../../hooks/useId";
import { Flex, Text } from "../Base";

const InputComponent = styled(
  AntInput.Password,
  {
    "&.ant-input-password": {
      ...baseStyle,
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

interface PasswordProps extends InputProps {
  [key: string]: any;
}

function Password({
  css: cssProp = {},
  label,
  helper,
  errorMessage,
  required,
  ...props
}: PasswordProps) {
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
}

export default Password;
