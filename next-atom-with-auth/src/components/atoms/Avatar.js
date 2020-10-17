import styled, { css } from "styled-components";
import { convertNumberToPixel } from "utils/helper";
import Image from "./Image";

const sizes = {
  small: { width: "40px", height: "40px" },
  regular: { width: "50px", height: "50px" },
  big: { width: "65px", height: "65px" }
};

const Avatar = styled(Image).attrs(props => ({
  autofit: true,
  height: sizes[props.size]?.width || convertNumberToPixel(props.size),
  fullRounded: props.circle
}))`
  ${props =>
    props.size && !Number.isInteger(props.size)
      ? css`
          ${sizes[props.size]}
        `
      : css`
          width: ${props.size};
          height: ${props.size};
        `}
`;

Avatar.propTypes = {};

Avatar.displayName = "Avatar";

Avatar.defaultProps = {
  size: "regular",
  src: "/static/images/avatar.jpeg"
};

export default Avatar;
