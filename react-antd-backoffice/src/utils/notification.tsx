import { notification } from "antd";
import { Icon } from "components/Base";
import { theme } from "configs/stitches.config";
import { ReactNode } from "react";
import { CgCloseO, CgInfo } from "react-icons/cg";
import { MdErrorOutline } from "react-icons/md";

interface NotifyProps {
  message: ReactNode;
  description?: ReactNode;
  onClose?: () => void;
  onClick?: () => void;
  duration?: number;
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

export const notifySuccess = ({
  message,
  description,
  ...params
}: NotifyProps): void => {
  notification.success({
    message,
    description,
    icon: <Icon src="notif-success" />,
    ...params,
  });
};

export const notifyError = ({
  message,
  description,
  ...params
}: NotifyProps): void => {
  notification.error({
    message,
    description,
    icon: <CgCloseO style={{ color: theme.colors["red400"].value }} />,
    ...params,
  });
};

export const notifyWarning = ({
  message,
  description,
  ...params
}: NotifyProps): void => {
  notification.warning({
    message,
    description,
    icon: <MdErrorOutline style={{ color: theme.colors["orange400"].value }} />,
    ...params,
  });
};

export const notifyInfo = ({
  message,
  description,
  ...params
}: NotifyProps): void => {
  notification.info({
    message,
    description,
    icon: <CgInfo style={{ color: theme.colors["lightBlue400"].value }} />,
    ...params,
  });
};

export const notifyDefault = ({
  message,
  description,
  ...params
}: NotifyProps): void => {
  notification.open({
    message,
    description,
    ...params,
  });
};

const notif = {
  success: notifySuccess,
  error: notifyError,
  warning: notifyWarning,
  info: notifyInfo,
  default: notifyDefault,
};

export default notif;
