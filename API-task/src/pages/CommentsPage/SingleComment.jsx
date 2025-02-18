import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

function SingleComment() {
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchComment = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      const commentData = await res.json();

      const postRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${commentData.postId}?_expand=user`
      );

      const postData = await postRes.json();
      console.log(postData.user.name);

      setComment(commentData);
      setAuthor(postData.user);
    };

    fetchComment();
  }, [id]);

  if (!comment || !author) {
    return <p>Loading comment....</p>;
  }

  const { name, body, email } = comment;

  return (
    <>
      <h1>Komentaras ({name})</h1>
      <p>{body}</p>

      {author && (
        <p>
          <strong>Autorius:</strong> {author.name} ({author.email})
        </p>
      )}
    </>
  );
}

export default SingleComment;
