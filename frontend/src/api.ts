import axios from "axios";
import { Todo } from "./types";

const API_URL = "http://localhost:8080/api/todos";

export const getTodos = () =>
  axios.get<Todo[]>(API_URL).then((res) => res.data);
export const addTodo = (todo: Omit<Todo, "id" | "createdAt" | "updatedAt">) =>
  axios.post<Todo>(API_URL, todo).then((res) => res.data);
export const updateTodo = (id: number, todo: Partial<Todo>) =>
  axios.put<Todo>(`${API_URL}/${id}`, todo).then((res) => res.data);
export const deleteTodo = (id: number) => axios.delete(`${API_URL}/${id}`);
export const toggleTodo = (id: number) =>
  axios.patch<Todo>(`${API_URL}/${id}/toggle`).then((res) => res.data);
