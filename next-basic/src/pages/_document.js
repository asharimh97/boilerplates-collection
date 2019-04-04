import Document, {
  Head as DocumentHead,
  Main,
  NextScript
} from "next/document";
import Head from "next/head";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <DocumentHead>
          <Head>
            <title>Dashboard for Caterer - Kulina</title>
          </Head>
          {this.props.styleTags}
        </DocumentHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
