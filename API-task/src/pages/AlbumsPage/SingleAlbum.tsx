import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../../config";
import axios from "axios";

type Album = {
  id: number;
  title: string;
  userId: number;
};

type Author = {
  id: number;
  name: string;
};

const SingleAlbum: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [album, setAlbum] = useState<Album | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      const { data } = await axios<Album>(
        `${API_URL}/albums/${id}?_expand=user`
      );

      const userRes = await axios(`${API_URL}/users/${data.userId}`);
      setAuthor(userRes.data);

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
};

export default SingleAlbum;
