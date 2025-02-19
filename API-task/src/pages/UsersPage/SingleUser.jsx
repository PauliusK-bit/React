import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../../../config";
import axios from "axios";

function SingleUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`${API_URL}/users/${id}`);

      const userData = await res.json();

      setUser(userData);

      console.log(userData);
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <p>Loading.....</p>;
  }

  const { name, email, address, phone, website, company } = user;

  const { street, suite, city } = address;

  const deleteHandler = async () => {
    axios.delete(`${API_URL}/users/${id}`);
    navigate("/api/project/users");
  };

  return (
    <>
      <button onClick={deleteHandler}>Delete A User</button>
      <h1>User</h1>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <p>{company.name}</p>
      <p>{street}</p>
      <p>{suite}</p>
      <p>{city}</p>
    </>
  );
}

export default SingleUser;
