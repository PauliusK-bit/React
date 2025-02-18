import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=100"
      );

      const commentsData = await res.json();

      console.log(commentsData);
      setComments(commentsData);
    };
    fetchComments();
  }, []);

  return (
    <>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Link to={`/api/project/comments/${comment.id}`}>
              {comment.id}. {comment.name} ({comment.email})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Comments;
