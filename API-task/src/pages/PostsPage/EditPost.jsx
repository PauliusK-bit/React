import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../../config";
import PostForm from "../../components/PostForm";

function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios(`${API_URL}/posts/${id}`);
        setPost(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Edit post {id}</h1>

      <PostForm editPostData={post} />
    </>
  );
}

export default EditPost;
