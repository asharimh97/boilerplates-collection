import { Switch as AntSwitch, SwitchProps as AntSwitchProps } from "antd";
import useId from "hooks/useId";
import BaseProps from "types/base";
import { BaseInputProps } from "./types";
import { renderError, renderHelper, renderLabel } from "./utils";
import { Flex, Text } from "../Base";

type CSSType = Pick<BaseProps, "css">;

interface SwitchProps extends AntSwitchProps, BaseInputProps {
  css?: CSSType;
  content?: string;
}

function Switch({
  css,
  label,
  content,
  required,
  helper,
  errorMessage,
  ...props
}: SwitchProps) {
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
      <Flex css={componentStyle}>
        <AntSwitch {...props} />
        {label && <Text ml="8px">{content}</Text>}
      </Flex>
      {renderHelper(helper, errorMessage)}
      {renderError(errorMessage)}
    </Flex>
  );
}

export default Switch;
