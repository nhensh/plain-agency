import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import AboutOne from "../components/abouts/AboutOne";
import BlogOne from "../components/blogs/BlogOne";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";
import Layout from "../components/layouts/Layout";
import ServiceOne from "../components/services/ServiceOne";
import BannerOne from "../components/banners/BannerOne";
import SliderOne from "../components/sliders/SliderOne";
import TeamOne from "../components/teams/TeamOne";

const HomeOne = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Home 01 || Plain Agency</title>
      </Head>

      <main className="page-wrapper">
        <BannerOne />

        <ServiceOne />

        <SliderOne />

        <AboutOne />

        <TeamOne />

        <BlogOne posts={posts} />

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default HomeOne;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data/posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const mardownWithMeta = fs.readFileSync(
      path.join("data/posts", filename),
      "utf-8"
    );

    const { data: postdata } = matter(mardownWithMeta);

    return {
      slug,
      date: postdata.publishedAt,
      postdata,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}
