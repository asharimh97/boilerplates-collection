import { globalCss } from "configs/stitches.config";

const globalStyles = globalCss({
  // Notification styles
  ".ant-notification-notice": {
    borderRadius: "$rounded-lg",
  },
  ".rule-forum *": {
    color: "$coolGray600 !important",
  },
});

export default globalStyles;
