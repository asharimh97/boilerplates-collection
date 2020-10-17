import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Box from "./Box";
import { border } from "styled-system";
import { convertNumberToPixel, handleErrorImage } from "utils/helper";

const ROUND_RADIUS = "8px";

const rounded = props => props.rounded && { borderRadius: ROUND_RADIUS };

const fullRounded = props =>
  props.fullRounded && {
    borderRadius: `calc(${convertNumberToPixel(props.height)} / 2)`
  };

const Img = styled(Box).attrs(props => ({
  as: "img"
}))`
  display: block;
  ${rounded};
  ${fullRounded};
`;

const ImgWrapper = styled(Box)`
  position: relative;
`;

const ImgFit = styled.img`
  height: 100% !important;
  object-position: center;
  object-fit: cover;
  position: absolute;
  width: 100% !important;

  ${border}
  ${rounded}
  ${fullRounded}
`;

const Image = ({ src, alt, autofit, ...props }) => {
  return autofit ? (
    <ImgWrapper {...props}>
      <ImgFit src={src} alt={alt} {...props} onError={handleErrorImage} />
    </ImgWrapper>
  ) : (
    <Img src={src} alt={alt} {...props} onError={handleErrorImage} />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  autofit: PropTypes.bool
};

Image.defaultProps = {
  alt: "",
  src: "error-image.jpg"
};

Image.displayName = "Image";

export default Image;
