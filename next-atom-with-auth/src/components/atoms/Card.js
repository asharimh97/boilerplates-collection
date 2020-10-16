import styled from "styled-components";
import Base from "./Base";

const Card = styled(Base)``;

Card.defaultProps = {
  background: "white",
  p: 3,
  borderRadius: "5px",
  boxShadow: 5
};

Card.displayName = "Card";

export default Card;
