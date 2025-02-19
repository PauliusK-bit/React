import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./SinglePost.css";
import { API_URL } from "../../../config";
import axios from "axios";

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`${API_URL}/posts/${id}?_embed=comments`);
      const postData = await res.json();
      setPost(postData);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading....</p>;
  }

  const { title, body, comments } = post;

  const deleteHandler = async () => {
    await axios.delete(`${API_URL}/posts/${id}`);
    navigate("/api/project/posts");
  };

  return (
    <>
      <h1 className="title">
        <button onClick={deleteHandler}>Delete Post</button>
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
