import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="MopaStore" />
        <meta name="description" content="Online Shopping" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mopastore.vercel.app" />
        <meta property="og:title" content="MopaStore" />
        <meta property="og:description" content="Online Shopping" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mopastore.vercel.app" />
        <meta name="twitter:title" content="MopaStore" />
        <meta name="twitter:description" content="Online Shopping" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
