import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next Thread bio in seconds."
          />
          <meta property="og:site_name" content="threadbio.io" />
          <meta
            property="og:description"
            content="Generate your next Thread bio in seconds."
          />
          <meta property="og:title" content="Thread Bio Generator" />
          <meta name="thread:card" content="summary_large_image" />
          <meta name="thread:title" content="Thread Bio Generator" />
          <meta
            name="thread:description"
            content="Generate your next Thread bio in seconds."
          />
          <meta
            property="og:image"
            content="https://threadbio.io/og-image.png"
          />
          <meta
            name="thread:image"
            content="https://threadbio.io/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
