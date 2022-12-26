/* eslint-disable no-restricted-globals */
import { LOGIN_STATE } from "constants/app";
import Login from "features/login";
import PublicLayout from "global/PublicLayout";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { notifySuccess } from "utils/notification";

const NOTIFY_STATE = {
  [LOGIN_STATE.LOGOUT]: {
    message: "Berhasil Logout",
    description: "Kamu berhasil logout dari dashboard",
  },
  [LOGIN_STATE.RESET_PASSWORD]: {
    message: "Berhasil memperbarui kata sandi",
    description: "Silakan login kembali menggunakan kata sandi baru Anda",
  },
};

function LoginPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      // @ts-ignore
      const message = NOTIFY_STATE[state] || null;

      if (message) {
        notifySuccess({ ...message });
      }

      // clear the state
      navigate("/login", {
        replace: true,
        state: undefined,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <PublicLayout>
      <Login />
    </PublicLayout>
  );
}

export default LoginPage;
