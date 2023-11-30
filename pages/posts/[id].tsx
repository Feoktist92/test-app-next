import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { postType } from "../../types";
import { FC } from "react";

type postTypeProps = {
  post: postType
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();


  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data },
  }
};

const Post: FC<postTypeProps> = ({ post }) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default Post;
