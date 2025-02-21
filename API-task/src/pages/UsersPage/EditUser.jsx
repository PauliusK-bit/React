import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../../config";
import axios from "axios";
import UserForm from "../../components/UserForm";

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios(`${API_URL}/users/${id}`);
        setUser(data);
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
      <h1>Edit User {id}</h1>

      <UserForm editUserData={user} />
    </>
  );
}

export default EditUser;
