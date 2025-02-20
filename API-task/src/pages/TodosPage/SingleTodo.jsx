import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../../config";

function SingleTodo() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const { data } = await axios(`${API_URL}/todos/${id}`);
        setTodo(data);
      } catch (error) {
        console.error(error);
        setError("Something Went Wrong :(");
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  if (!todo) {
    return <p>Loading.....</p>;
  }

  return (
    <>
      <h1>Todo</h1>
      <p>Todo title: {todo.title}</p>
    </>
  );
}

export default SingleTodo;
