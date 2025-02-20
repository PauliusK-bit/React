import { useEffect, useState } from "react";
import { Link } from "react-router";
import { API_URL } from "../../../config";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`${API_URL}/users`);

      const usersData = await res.json();

      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/api/project/users/${user.id}`}>
              {user.id}. {user.name} <strong>({user.username})</strong>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;
