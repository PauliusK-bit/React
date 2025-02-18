import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Posts from "./pages/PostsPage/Posts";
import SinglePost from "./pages/PostsPage/SinglePost";
import Comments from "./pages/CommentsPage/Comments";
import SingleComment from "./pages/CommentsPage/SingleComment";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="api">
          <Route path="project">
            <Route index element={<h1>API jsonplaceholder project</h1>} />

            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<SinglePost />} />

            <Route path="users" element={<h1>Users Page</h1>} />
            <Route path="users/:id" element={<h1>Single Users Page</h1>} />

            <Route path="albums" element={<h1>Album Page</h1>} />
            <Route path="albums/:id" element={<h1>Single Album Page</h1>} />

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
