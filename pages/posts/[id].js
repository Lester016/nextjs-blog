import Head from "next/head";
import React from "react";
import { Date } from "../../components/date";

import Layout from "../../components/layout";
import { getAllPostId, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostId();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id); // to access the url in [id].js
  return {
    props: {
      postData,
    },
  };
}

export default Post;
