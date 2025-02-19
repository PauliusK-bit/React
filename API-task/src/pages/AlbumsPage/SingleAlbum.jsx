import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../../config";
import axios from "axios";

function SingleAlbum() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      const { data } = await axios(`${API_URL}/albums/${id}?_expand=user`);

      const userRes = await axios(`${API_URL}/users/${data.userId}`);
      setAuthor(userRes.data);
      console.log(userRes.data);

      setAlbum(data);
    };
    fetchAlbum();
  }, [id]);

  if (!album) {
    return <p>Loading....</p>;
  }

  const { title } = album;

  return (
    <>
      <h1>
        Albumo pavadinimas: <span>{title}</span>
      </h1>
      {author && (
        <p>
          Albumo autorius: <strong>{author.name}</strong>
        </p>
      )}
    </>
  );
}

export default SingleAlbum;
