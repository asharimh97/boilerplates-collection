import authStore from "lib/stores/entities/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate, Route } from "react-router-dom";
import { getToken } from "utils/authStore";

function RestrictedRoute() {
  const [loggedIn, setLoggedIn] = useState(false);
  const authUser = authStore((state) => state.user);

  useEffect(() => {
    const token = authUser || getToken();

    if (token) {
      setLoggedIn(true);
    }
  }, [authUser]);

  // // Get user data, if there's token redirect user to dashboard
  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}

export default RestrictedRoute as typeof Route;
