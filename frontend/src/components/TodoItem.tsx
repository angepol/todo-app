import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types";
import { deleteTodo, toggleTodo, updateTodo } from "../api";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const toggleMutation = useMutation({
    mutationFn: () => toggleTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <div className="todo-actions">
        <button
          onClick={() => toggleMutation.mutate()}
          className={todo.completed ? "completed" : ""}
        >
          {todo.completed ? "✓" : "○"}
        </button>
        <button onClick={() => deleteMutation.mutate(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
