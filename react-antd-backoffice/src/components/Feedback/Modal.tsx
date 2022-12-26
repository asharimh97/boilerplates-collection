import { Modal as AntModal, ModalProps } from "antd";
import { Text } from "components/Base";
import { styled } from "configs/stitches.config";
import { FC } from "react";
import { IoClose } from "react-icons/io5";

const Component = styled(AntModal, {
  "& .ant-modal-content": {
    br: "$rounded-lg",
  },
  "& .ant-modal-close-x": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .ant-modal-header": {
    borderTopLeftRadius: "$rounded-lg",
    borderTopRightRadius: "$rounded-lg",
    p: "16px",
  },
  "& .ant-modal-body": {
    p: "16px",
  },
  "& .ant-modal-footer": {
    button: {
      br: "$rounded-md",
      height: "36px",
      padding: "0 16px",
      fontWeight: "$medium",
    },
  },
});

const Modal: FC<ModalProps> = ({ title, ...props }) => {
  return (
    <Component
      title={<Text weight="$semibold">{title}</Text>}
      closeIcon={<IoClose size="20px" />}
      zIndex={1050}
      {...props}
    />
  );
};

export default Modal;
