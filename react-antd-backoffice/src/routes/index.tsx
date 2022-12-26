import { BASE_FOLDER } from "constants/api";
import LoginPage from "pages/login";
import LogoutPage from "pages/logout";
import NotFoundPage from "pages/not-found";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";

function AppRoutes() {
  return (
    <Router>
      {/* basename is used when deploying to server */}
      {/* <Router basename={`/${BASE_FOLDER}`}> */}
      <Routes>
        <Route path="/logout" element={<LogoutPage />} />

        <Route element={<RestrictedRoute />}>
          {/* <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/set-password" element={<SetPassword />} />
          <Route path="/reset-password" element={<SetPassword />} /> */}
        </Route>

        <Route path="/" element={<LoginPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
