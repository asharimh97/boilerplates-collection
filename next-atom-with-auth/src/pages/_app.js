import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import theme from "styles/theme";

import "normalize.css";
import "styles/nprogress.css";
import "styles/antd.custom.less";
import "styles/globals.css";

import { wrapper } from "stores";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object
};

export default wrapper.withRedux(MyApp);
