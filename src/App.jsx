import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./components/RootLayout";
import BlogLayout from "./pages/BlogLayout";
// import BlogPostsPage, { loader as postsLoader } from "./pages/BlogPosts";
import DeferredBlogPost, {
  loader as deferredBlogLoader,
} from "./pages/DeferredBlogPost";
import GeneralError from "./pages/GeneralError";
import NewPostPage, { newPostAction } from "./pages/NewPost";
import PostDetailPage, {
  PostDetailError,
  postDetailLoader,
} from "./pages/PostDetail";
import WelcomePage from "./pages/Welcome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<GeneralError />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route
          index
          element={<DeferredBlogPost />}
          loader={deferredBlogLoader}
        />
        {/* <Route index element={<BlogPostsPage />} loader={postsLoader} /> */}
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={postDetailLoader}
          errorElement={<PostDetailError />}
        />
      </Route>
      <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={newPostAction}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
