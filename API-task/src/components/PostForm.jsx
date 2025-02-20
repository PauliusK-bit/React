/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../../config";

function PostForm(props) {
  const { editPostData } = props;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [postId, setPostId] = useState(null);
  const [users, setUsers] = useState(null);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`${API_URL}/users`);
      const usersData = await res.json();

      setUsers(usersData);

      if (editPostData) {
        setPostId(editPostData.id);
        setTitle(editPostData.title);
        setBody(editPostData.body);
        setSelectedUser(editPostData.userId);
      } else {
        setSelectedUser(usersData[0].id);
      }
    };

    fetchUsers();
  }, [editPostData]);

  const titleHandler = (event) => setTitle(event.target.value);
  const bodyHandler = (event) => setBody(event.target.value);
  const selectedUserHandler = (event) => setSelectedUser(event.target.value);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!title || !body) {
      setError("Title and body is required");
      return;
    }

    const newPost = {
      title,
      body,
      userId: selectedUser,
    };

    if (editPostData) {
      const { data } = await axios.put(`${API_URL}/posts/${postId}`, newPost);
      navigate("/api/project/posts/" + data.id);
    } else {
      const { data } = await axios.post(`${API_URL}/posts`, newPost);
      navigate("/api/project/posts/" + data.id);
    }
  };

  if (!users) {
    return <p>Loading....</p>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={titleHandler}
        />
      </div>
      <div className="form-control">
        <label htmlFor="body">Body:</label>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={bodyHandler}
        ></textarea>
      </div>

      <div className="form-control">
        <label htmlFor="user">User:</label>
        <select value={selectedUser} onChange={selectedUserHandler}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">
        {editPostData ? "Edit Post" : "Create New Post"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default PostForm;
