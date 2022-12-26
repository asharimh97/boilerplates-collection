import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "routes";
import reportWebVitals from "./reportWebVitals";
import "styles/app.styles.less";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    {/* ConfigProvider is used to modify antd theme */}
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#36a554",
          colorFillSecondary: "#ffe45c",
        },
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
