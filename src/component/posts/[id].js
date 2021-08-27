import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "./date";

export default function Post({ postData }) {
  
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <br />
        <div>
          <Date dateString={postData.date} />
        </div>
      </article>
    </>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
