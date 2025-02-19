import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../config";
import { Link } from "react-router";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const { data } = await axios(`${API_URL}/albums`);
      console.log(data);

      setAlbums(data);
    };
    fetchAlbums();
  }, []);

  return (
    <>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/api/project/albums/${album.id}`}>
              ({album.id}) {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Albums;
