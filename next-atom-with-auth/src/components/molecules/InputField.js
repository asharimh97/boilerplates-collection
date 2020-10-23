/* eslint-disable react/prop-types */
import React from "react";
import { Checkbox, Form, Radio, Switch } from "antd";
import PropTypes from "prop-types";
import InputText from "./Inputs/Text";
import DatePicker from "./Inputs/DatePicker";
import InputImage from "./Inputs/Image";
import styled from "styled-components";
import { space } from "styled-system";

const FormItem = styled(Form.Item)`
  display: block;
  ${space}
`;

const makeField = Component => ({ meta, input, children, label, ...rest }) => {
  const hasError = meta.touched && meta.error;
  return (
    <FormItem
      colon={false}
      label={label}
      labelAlign="left"
      validateStatus={hasError ? "error" : "success"}
      help={hasError && meta.error}
      {...rest}
    >
      <Component {...input} {...rest}>
        {children}
      </Component>
    </FormItem>
  );
};

let InputField = ({ type, ...props }) => {
  const fieldType =
    props["data-type"] && props["data-type"] !== type
      ? props["data-type"]
      : type;

  const Components = {
    checkbox: Checkbox,
    date: DatePicker,
    image: InputImage,
    password: InputText.Password,
    radio: Radio,
    switch: Switch,
    text: InputText,
    textarea: InputText.TextArea
  };

  const Component = Components[fieldType] || InputText;

  return <Component {...props} />;
};

InputField.propTypes = {
  type: PropTypes.oneOf([
    "checkbox",
    "date",
    "image",
    "password",
    "switch",
    "text",
    "textarea"
  ]),
  "data-type": PropTypes.string
};

InputField = makeField(InputField);

export default InputField;
