import { useEffect, useState } from "react";
import { Link } from "react-router";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user&_limit=30"
      );
      const postsData = await res.json();
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts:</h1>

      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/api/project/posts/${post.id}`}>
                {post.id}. {post.title} ({post.comments.length} comments)
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Posts;
