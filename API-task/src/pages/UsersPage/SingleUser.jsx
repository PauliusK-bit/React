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
      <p>
        Name: <strong>{name}</strong>
      </p>
      <p>
        Email: <strong>{email}</strong>
      </p>
      <p>
        Phone number: <strong>{phone}</strong>
      </p>
      <p>
        Website: <strong>{website}</strong>
      </p>
      <p>
        Company name: <strong>{company.name}</strong>
      </p>
      <p>
        Street: <strong>{street}</strong>
      </p>
      <p>
        Suite: <strong>{suite}</strong>
      </p>
      <p>
        City: <strong>{city}</strong>
      </p>
    </>
  );
}

export default SingleUser;
