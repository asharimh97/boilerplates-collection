import { Radio as AntRadio, RadioProps as AntRadioProps } from "antd";
import useId from "hooks/useId";
import BaseProps from "types/base";
import { BaseInputProps } from "./types";
import { renderLabel, renderHelper, renderError } from "./utils";
import { Flex } from "../Base";

type CSSType = Pick<BaseProps, "css">;

interface CheckboxProps extends AntRadioProps, BaseInputProps {
  css?: CSSType;
  content?: string;
}

function Radio({
  css = {},
  label,
  content,
  required,
  helper,
  errorMessage,
  children,
  ...props
}: CheckboxProps) {
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
        <AntRadio {...props} id={id}>
          {children || content}
        </AntRadio>
      </Flex>
      {renderHelper(helper, errorMessage)}
      {renderError(errorMessage)}
    </Flex>
  );
}

export default Radio;
