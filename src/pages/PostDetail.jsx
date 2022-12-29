import { useLoaderData, useRouteError } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

function PostDetailPage() {
  const post = useLoaderData();
  return <BlogPost title={post.title} text={post.body} />;
}

export default PostDetailPage;

export const postDetailLoader = ({ params }) => {
  return getPost(params.id);
};

export const PostDetailError = () => {
  const error = useRouteError();
  console.log("error :>> ", error);

  return <div>{error.message}</div>;
};
