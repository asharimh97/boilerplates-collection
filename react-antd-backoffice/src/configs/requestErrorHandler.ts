import { message } from "antd";

const unauthorizedHandler = () => {
  window.location.href = "/logout";
};

const defaultHandler = (msg: string) => {
  message.error(msg);
};

const handler = {
  401: unauthorizedHandler,
  403: unauthorizedHandler,
  404: defaultHandler,
  500: defaultHandler,
  DEFAULT: defaultHandler,
};

const errorHandler = (
  errorStatus?: number,
  msg: string = "An error occurred",
) => {
  // @ts-ignore
  const handleError = handler[errorStatus] || handler.DEFAULT;

  handleError(msg);
};

export default errorHandler;
