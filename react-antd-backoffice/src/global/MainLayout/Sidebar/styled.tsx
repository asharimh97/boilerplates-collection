import { Menu } from "antd";
import { styled } from "configs/stitches.config";

const { SubMenu: AntSubMenu, Item: AntItem } = Menu;

export const SubMenu = styled(AntSubMenu, {
  "& .ant-menu-item-icon": {
    alignItems: "center",
    display: "flex",
  },
});

export const Item = styled(AntItem, {
  "& .ant-menu-item-icon": {
    alignItems: "center",
    display: "flex",
  },

  "&.ant-menu-item-selected": {
    fontWeight: "$semibold",
  },
});
