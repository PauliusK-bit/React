import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../config";
import { Link } from "react-router";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const { data } = await axios(`${API_URL}/todos`);
        setTodos(data);
      } catch (err) {
        console.error("Klaida gaunant užduotis:", err);
        setError("Nepavyko įkelti užduočių. Bandykite dar kartą.");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <p>Kraunama...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <h1>Todos</h1>
      {todos.length === 0 ? (
        <p>Nėra jokių užduočių.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Link to={`/api/project/todos/${todo.id}`}>
                ({todo.id}) {todo.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Todos;
