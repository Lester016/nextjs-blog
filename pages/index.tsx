import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import { Date } from "../components/date";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[];
}) {
  return (
    <Layout home={true}>
      <Head>title {siteTitle}</Head>
      <section className={utilStyles.headingMd}>
        <p>lorem ipsum dolor et.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
};
