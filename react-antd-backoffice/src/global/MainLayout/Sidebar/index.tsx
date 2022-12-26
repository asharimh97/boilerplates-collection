import { Menu } from "antd";
import { Box, Icon, Text } from "components/Base";
import useBasePath from "hooks/useBasePath";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navigations from "./navigations";
import { SubMenu, Item } from "./styled";

const mappedNav = navigations.flatMap((nav) =>
  nav.children.length > 0 ? nav.children : nav,
);
const rootMenuKeys = navigations.map((nav) => nav.key).filter((nav) => nav);

function Sidebar() {
  const basePath = useBasePath() || "/";
  const location = useLocation();

  const [activeKey, setActiveKey] = useState("dashboard");
  const [openKeys, setOpenKeys] = useState([]);

  useEffect(() => {
    const { pathname } = location;
    const navId = mappedNav.findIndex((nav, index) => {
      if (nav.path === pathname) {
        return true;
      }

      // @ts-ignore
      if (nav.pattern) {
        const pathPattern = basePath.match(nav.pattern);
        // console.log({ pathPattern, basePath });
        if (pathPattern) {
          return true;
        }
      }

      return false;
    });

    if (navId >= 0) {
      // @ts-ignore
      setActiveKey(mappedNav[navId].key);
    }
  }, [location, basePath]);

  // TODO: Add use effect to set open keys
  useEffect(() => {
    const idx = navigations.findIndex((nav) => {
      if (nav.key === activeKey) {
        return true;
      }

      const mappedChildren = nav.children.map((child) => child.key);

      if (mappedChildren.includes(activeKey)) {
        return true;
      }

      return false;
    });

    if (idx >= 0 && navigations[idx].key) {
      // @ts-ignore
      setOpenKeys([navigations[idx].key]);
    }
  }, [activeKey]);

  const handleClick = (e: any) => {
    // console.log("click", e);
  };

  const handleOpenChange = (keys: any[]) => {
    // @ts-ignore
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootMenuKeys.indexOf(latestOpenKey) === -1) {
      // @ts-ignore
      setOpenKeys(keys);
    } else {
      // @ts-ignore
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Box
      as="aside"
      w="252px"
      h="calc(100vh - 64px)"
      backgroundColor="$white"
      position="fixed"
      left="0"
      top="64px"
      zIndex="1"
      overflow="auto"
    >
      <Menu
        onClick={handleClick}
        mode="inline"
        openKeys={openKeys} // key SubMenu
        onOpenChange={handleOpenChange}
        selectedKeys={[activeKey]} // key menu item
      >
        {navigations.map((nav, index) => {
          if (nav.children.length === 0) {
            return (
              <Item
                key={nav.key || `nav-${index}`}
                icon={<Icon src={nav.icon || ""} color="currentColor" />}
              >
                {nav.path ? (
                  // @ts-ignore
                  <Link to={nav.path}>
                    <Text weight={"$semibold"}>{nav.label}</Text>
                  </Link>
                ) : (
                  <Text weight={"$semibold"}>{nav.label}</Text>
                )}
              </Item>
            );
          }

          return (
            <SubMenu
              key={nav.key || `nav-${index}`}
              icon={<Icon src={nav.icon || ""} color="currentColor" />}
              title={
                <Text size="$sm" weight="$semibold">
                  {nav.label}
                </Text>
              }
            >
              {nav.children.map((subnav, idx) => {
                return (
                  <Item key={subnav.key || `subnav-${index}-${idx}`}>
                    {/* @ts-ignore */}
                    <Link to={subnav.path}>{subnav.label}</Link>
                  </Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </Box>
  );
}

export default Sidebar;
