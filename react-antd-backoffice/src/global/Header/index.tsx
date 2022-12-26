import { Image, Flex, Box } from "components/Base";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <Box
      as="header"
      w="100%"
      h="64px"
      css={{ backgroundColor: "$white", position: "fixed", top: 0, zIndex: 2 }}
      px="75px"
    >
      <Flex justify="space-between" align="center" h="100%">
        <Link to="/">
          <Image src="/images/reach-logo.png" height="40px" alt="Reach logo" />
        </Link>
        <UserInfo />
      </Flex>
    </Box>
  );
}

export default Header;
