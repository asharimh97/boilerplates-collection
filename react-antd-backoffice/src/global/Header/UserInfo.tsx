import { Avatar, Badge, Popover, Divider } from "antd";
import { Flex, Text } from "components/Base";
import { theme } from "configs/stitches.config";
import useProfile from "hooks/useProfile";
import useStore from "lib/stores/entities/profile";
import { FaUser } from "react-icons/fa";
import { IoNotifications, IoChevronDown } from "react-icons/io5";
import UserOption from "./UserOption";

const iconColor = theme.colors["coolGray500"].value;

function UserInfo() {
  useProfile();
  const user = useStore((state) => state.user);

  if (!user) {
    return <div />;
  }

  return (
    <Flex alignItems="center">
      <Badge size="small" count={5}>
        <IoNotifications size="18px" style={{ color: iconColor }} />
      </Badge>
      <Divider type="vertical" style={{ height: "32px", marginLeft: "16px" }} />
      <Flex alignItems="center" mx="8px" maxWidth="200px">
        <Avatar size={32} icon={<FaUser style={{ margin: "7px auto" }} />} />
        <Flex direction="column" ml="12px">
          <Text
            size="$sm"
            weight="$semibold"
            color="$coolGray600"
            ellipsis
            maxWidth="150px"
          >
            {user.name}
          </Text>
          <Text size="$xs" color="$coolGray600">
            {user.role.name}
          </Text>
        </Flex>
      </Flex>
      <Divider
        type="vertical"
        style={{ height: "32px", marginRight: "16px" }}
      />
      <Popover
        trigger={["click"]}
        placement="bottomRight"
        content={<UserOption />}
      >
        <IoChevronDown
          role="button"
          size="18px"
          style={{ color: iconColor, cursor: "pointer" }}
        />
      </Popover>
    </Flex>
  );
}

export default UserInfo;
