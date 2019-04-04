import React from "react";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { initStore } from "../stores";
import theme from "../styles/theme";
import "../styles/global.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
