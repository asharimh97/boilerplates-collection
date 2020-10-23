import styled from "styled-components";
import Box from "./Box";

const Form = styled(Box).attrs(props => ({
  as: "form"
}))``;

Form.displayName = "Form";

export default Form;
