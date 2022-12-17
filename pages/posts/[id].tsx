import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { Date } from "../../components/date";

import Layout from "../../components/layout";
import { getAllPostId, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

const Post = ({
  postData,
}: {
  postData: { title: string; date: string; contentHtml: string };
}) => {
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

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostId();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string); // to access the url in [id].js
  return {
    props: {
      postData,
    },
  };
};

export default Post;
