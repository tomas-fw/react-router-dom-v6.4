import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import Posts from "../components/Posts";
import { getSlowPosts } from "../util/api";

const DeferredBlogPost = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <div>Our Bog Posts</div>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Error loading blog posts</p>}
        >
          {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
};

export default DeferredBlogPost;

export const loader = async () => {
  //   return defer({ posts: await getSlowPosts() });
  return defer({ posts: getSlowPosts() });
};
