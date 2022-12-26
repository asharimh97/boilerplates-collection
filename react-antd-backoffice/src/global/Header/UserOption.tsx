/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider } from "antd";
import { Text, Flex } from "components/Base";
import { Modal } from "components/Feedback";
import { theme } from "configs/stitches.config";
import { useState } from "react";
import { HiLockClosed, HiOutlineLogout } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";

const grey = theme.colors["coolGray500"].value;
const red = theme.colors["red600"].value;

function UserOption() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const handleLogout = (e: any) => {
    e?.preventDefault();
    setVisible(true);
  };

  const logout = () => {
    navigate("/logout");
  };

  return (
    <>
      <Link to="/profile/change-password">
        <Flex align="center" py="4px">
          <HiLockClosed
            size="18px"
            style={{ color: grey, marginRight: "12px" }}
          />
          <Text color="$coolGray500">Ubah kata sandi</Text>
        </Flex>
      </Link>
      <Divider style={{ margin: "10px 0" }} />
      <a href="#" onClick={handleLogout}>
        <Flex align="center" py="4px">
          <HiOutlineLogout
            size="18px"
            style={{ color: red, marginRight: "12px" }}
          />
          <Text color="$red600">Keluar</Text>
        </Flex>
      </a>
      <Modal
        visible={visible}
        title="Keluar"
        cancelText="Batalkan"
        okText="Ya, Keluar"
        onCancel={() => setVisible(false)}
        onOk={logout}
      >
        Apakah kamu yakin ingin keluar dari dashboard?
      </Modal>
    </>
  );
}

export default UserOption;
