import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Posts from "./pages/PostsPage/Posts";
import SinglePost from "./pages/PostsPage/SinglePost";
import Comments from "./pages/CommentsPage/Comments";
import SingleComment from "./pages/CommentsPage/SingleComment";
import Users from "./pages/UsersPage/Users";
import SingleUser from "./pages/UsersPage/SingleUser";
import Albums from "./pages/AlbumsPage/Albums";
import SingleAlbum from "./pages/AlbumsPage/SingleAlbum";
import CreatePostPage from "./pages/PostsPage/CreatePostPage";
import CreateUserPage from "./pages/UsersPage/CreateUserPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="api">
          <Route path="project">
            <Route index element={<h1>API jsonplaceholder project</h1>} />

            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<SinglePost />} />
            <Route path="createpost" element={<CreatePostPage />} />

            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<SingleUser />} />
            <Route path="createuser" element={<CreateUserPage />} />

            <Route path="albums" element={<Albums />} />
            <Route path="albums/:id" element={<SingleAlbum />} />

            <Route path="comments" element={<Comments />} />
            <Route path="comments/:id" element={<SingleComment />} />

            <Route path="todos" element={<h1>Todos Page</h1>} />
            <Route path="todos/:id" element={<h1>Single Todo Page</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
