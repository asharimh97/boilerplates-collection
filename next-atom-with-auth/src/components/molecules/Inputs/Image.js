import React, { PureComponent } from "react";
import { message, Upload } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import { layout, space } from "styled-system";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import propTypes from "@styled-system/prop-types";
import { Image } from "components/atoms";

const AUpload = styled(Upload)`
  & > .ant-upload {
    ${layout}
    ${space}
  }
`;

function getImageUrl(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

const getLimitSize = size => {
  let definedSize = size.split("");
  const unit = size.slice(-2);
  definedSize.splice(definedSize.length - 2, 2);
  definedSize = parseInt(definedSize.join(""));

  if (typeof definedSize === "number") {
    const limitSize = unit === "MB" ? definedSize : definedSize / 1000;
    return limitSize;
  }

  return 1;
};

class InputImage extends PureComponent {
  state = {
    loading: false,
    imageUrl: null
  };

  beforeUpload = file => {
    const { type, size } = file;
    const { maxSize } = this.props;
    const isImage = /image/.test(type);
    if (!isImage) {
      message.error("You can only upload image file!");
    }

    const limitSize = getLimitSize(maxSize);
    const isBelowLimit = size / 1024 / 1024 < limitSize;
    if (!isBelowLimit) {
      message.error(`Image must smaller than ${maxSize}!`);
    }

    return isImage && isBelowLimit;
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getImageUrl(info.file.originFileObj, imageUrl =>
        this.setState(
          {
            imageUrl,
            loading: false
          },
          () => {
            console.log(imageUrl);
          }
        )
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const UploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: "8px" }}>Upload</div>
      </div>
    );

    return (
      <AUpload
        {...this.props}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
        accept="image/jpeg,image/png"
      >
        {imageUrl ? (
          <Image src={imageUrl} width="90%" height="90%" autofit tight />
        ) : (
          UploadButton
        )}
      </AUpload>
    );
  }
}

InputImage.propTypes = {
  maxSize: PropTypes.string
};

InputImage.defaultProps = {
  maxSize: "1MB"
};

export default InputImage;
