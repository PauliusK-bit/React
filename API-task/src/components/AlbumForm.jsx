import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../../config";

function AlbumForm() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const titleHandler = (event) => setTitle(event.target.value);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!title) {
      setError("Title is required");
      return;
    }

    const newAlbum = {
      title,
    };

    const { data } = await axios.post(`${API_URL}/albums`, newAlbum);

    console.log(data.id);

    navigate(`/api/project/albums/${data.id}`);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={titleHandler}
          />
        </div>
        <button type="submit">Create a New Album</button>
      </form>
    </>
  );
}

export default AlbumForm;
