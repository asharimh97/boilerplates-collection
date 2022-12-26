import { LOGIN_STATE } from "constants/app";
import authStore from "lib/stores/entities/auth";
import useProfileStore from "lib/stores/entities/profile";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { destroyToken } from "utils/authStore";

function LogoutPage() {
  const navigate = useNavigate();
  const resetAuth = authStore((state) => state.reset);
  const resetProfile = useProfileStore((state) => state.resetProfile);

  useEffect(() => {
    destroyToken();
    resetAuth();
    resetProfile();
    navigate("/login", {
      state: LOGIN_STATE.LOGOUT,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div />;
}

export default LogoutPage;
