import Head from "next/head";
import Link from "next/link";
// import Script from "next/script";
import React from "react";

import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post | Portfolio</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>first-post</h1>

      <Link href={"/"}>Back to the homepage</Link>
    </Layout>
  );
};

export default FirstPost;
