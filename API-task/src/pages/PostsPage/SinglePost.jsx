import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SinglePost.css";

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}?_embed=comments`
      );
      const postData = await res.json();
      setPost(postData);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading....</p>;
  }

  const { title, body, comments } = post;
  return (
    <>
      <h1 className="title">
        Posto pavadinimas: <span className="title-name">{title}</span>
      </h1>
      <p className="body">
        Aprašymas:
        <span className="body-name">{body}</span>
      </p>
      <h2>Komentarai</h2>
      {comments && comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong> ({comment.email})
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nėra komentarų.</p>
      )}
    </>
  );
}

export default SinglePost;
